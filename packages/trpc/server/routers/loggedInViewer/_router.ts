import { router } from "../../trpc";
import { ZAwayInputSchema } from "./away.schema";
import authedProcedure from "../../procedures/authedProcedure";
import { ZSummaryInputSchema } from "./summary.schema";

type AppsRouterHandlerCache = {
  away?: typeof import("./away.handler").awayHandler;
  summary?: typeof import("./summary.handler").summaryHandler;
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

  summary: authedProcedure.input(ZSummaryInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.summary) {
      UNSTABLE_HANDLER_CACHE.summary = (await import("./summary.handler")).summaryHandler;
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.summary) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.summary({ ctx, input });
  }),
});
