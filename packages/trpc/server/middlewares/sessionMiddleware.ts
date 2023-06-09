import type { Session } from "next-auth";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@pm/auth";

import { TRPCError } from "@trpc/server";
import type { Maybe } from "@trpc/server";

import type { TRPCContextInner } from "../createContext";
import { middleware } from "../trpc";

export async function getUserFromSession(ctx: TRPCContextInner, session: Maybe<Session>) {
  const { prisma } = ctx;
  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });

  // some hacks to make sure `username` and `email` are never inferred as `null`
  if (!user) {
    return null;
  }

  const { email, id } = user;
  if (!email || !id) {
    return null;
  }

  const rawAvatar = user?.image;
  return {
    ...user,
    id,
    rawAvatar,
    email,
    avatar: user?.image,
  };
}

export type UserFromSession = Awaited<ReturnType<typeof getUserFromSession>>;

const getUserSession = async (ctx: any) => {
  const { req, res } = ctx;

  const session = req ? await getServerSession(req, res, authOptions) : null;
  const user = session ? await getUserFromSession(ctx, session) : null;


  return { user: user, session };
};
const sessionMiddleware = middleware(async ({ ctx, next }) => {
  const { user, session } = await getUserSession(ctx);

  return next({
    ctx: { user, session },
  });
});

export const isAuthed = middleware(async ({ ctx, next }) => {
  const { user, session } = await getUserSession(ctx);

  if (!user || !session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: { ...ctx, user, session },
  });
});


export default sessionMiddleware;
