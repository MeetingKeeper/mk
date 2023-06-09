import type { NextApiRequest } from "next";

import { HttpError } from "@pm/lib/http-error";

import { getSession } from "./getSession";

type CtxOrReq = { req: NextApiRequest; ctx?: never } | { ctx: { req: NextApiRequest }; req?: never };

export const ensureSession = async (ctxOrReq: CtxOrReq) => {
  const session = await getSession(ctxOrReq);
  if (!session?.user?.email) throw new HttpError({ statusCode: 401, message: "Unauthorized" });
  return session;
};
