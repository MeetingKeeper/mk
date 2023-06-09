import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '@pm/trpc/server/createContext';
import { appRouter } from '@pm/trpc/server/routers/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext,
  });

export { handler as GET, handler as POST };
