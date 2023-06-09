import superjson from "superjson";

import { initTRPC } from "@trpc/server";

import type { UserFromSession } from "./middlewares/sessionMiddleware";
import { ZodError } from "zod";
import { Context, createContext } from "./createContext";

export const tRPCContext = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause?.flatten()
            : null,
      },
    };
  },
});

export const router = tRPCContext.router;
export const mergeRouters = tRPCContext.mergeRouters;
export const middleware = tRPCContext.middleware;
export const procedure = tRPCContext.procedure;


export type TrpcSessionUser = UserFromSession;
