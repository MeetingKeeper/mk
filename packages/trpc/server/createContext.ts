import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { Session } from "next-auth";
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

import prisma from "@pm/database";
import type { User as PrismaUser } from "@pm/database/client";

import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { inferAsyncReturnType } from "@trpc/server";

type CreateContextOptions = CreateNextContextOptions | GetServerSidePropsContext;

export type CreateInnerContextOptions = {
  session?: Session | null;
  user?:
    | Omit<
        PrismaUser,
        | "identityProviderId"
        | "verified"
      >;
} & Partial<CreateContextOptions>;

export type GetSessionFn =
  | ((_options: {
      req: GetServerSidePropsContext["req"] | NextApiRequest;
      res: GetServerSidePropsContext["res"] | NextApiResponse;
    }) => Promise<Session | null>)
  | (() => Promise<Session | null>);

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createSSGHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/context#inner-and-outer-context
 */
export async function createContextInner(opts: CreateInnerContextOptions) {
  return {
    prisma,
    ...opts,
  };
}

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async ({ req, resHeaders }: FetchCreateContextFnOptions) => {
  const contextInner = await createContextInner({});
  return {
    ...contextInner,
    req,
    res: {
      headers: resHeaders,
      getHeader() {
        return resHeaders;
      },
      setHeader(header: string, value: string | string[]) {
        resHeaders[header] = value;
      },
    },
  };
};


// export function createContextNew(opts?: FetchCreateContextFnOptions) {
//   return {
//     headers: opts && Object.fromEntries(opts.req.headers),
//   };
// }

export type Context = inferAsyncReturnType<typeof createContext>;

export type TRPCContext = inferAsyncReturnType<typeof createContext>;
export type TRPCContextInner = inferAsyncReturnType<typeof createContextInner>;
export type WithSession<T extends TRPCContext = any> = T &
  Required<Pick<CreateInnerContextOptions, "session">>;
