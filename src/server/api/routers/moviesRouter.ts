import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const moviesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    const qResp = ctx.prisma.movie.findMany({
      include: {
        genre: true,
      },
    });
    console.log(qResp);
    return qResp;
  }),
});
