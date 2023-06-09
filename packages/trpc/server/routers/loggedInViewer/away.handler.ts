import { prisma } from "@pm/database";

import type { TAwayInputSchema } from "./away.schema";
import { TrpcSessionUser } from "../../trpc";

type AwayOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TAwayInputSchema;
};

export const awayHandler = async ({ ctx, input }: AwayOptions) => {
  await prisma.user.update({
    where: {
      email: ctx.user.email,
    },
    data: {
      email: ctx.user.email,
    },
  });
};
