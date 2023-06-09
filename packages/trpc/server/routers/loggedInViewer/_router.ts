import { router } from "../../trpc";
import { ZAwayInputSchema } from "./away.schema";
import authedProcedure from "../../procedures/authedProcedure";

type AppsRouterHandlerCache = {
  away?: typeof import("./away.handler").awayHandler;
};

const UNSTABLE_HANDLER_CACHE: AppsRouterHandlerCache = {};

export const loggedInViewerRouter = router({
  away: authedProcedure.input(ZAwayInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.away) {
      UNSTABLE_HANDLER_CACHE.away = (await import("./away.handler")).awayHandler;
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.away) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.away({ ctx, input });
  }),
});
