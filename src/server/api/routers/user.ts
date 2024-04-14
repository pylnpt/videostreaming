import {z} from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

  export const userRouter = createTRPCRouter({
    getAllUser: 
        protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.user.findMany();
    })


    //getuserbyId implementation
  })