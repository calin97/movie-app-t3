import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { moviesRouter } from "~/server/api/routers/moviesRouter";
import { userRouter } from "./routers/userRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  movies: moviesRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
