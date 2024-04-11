import { TRPCError } from "@trpc/server";
import {z} from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

  export const userRouter = createTRPCRouter({
    getAllUser: 
        protectedProcedure.query(async ({ ctx }) => {
          try {
            return await ctx.db.user.findMany({
              where: {
                email: {
                  not:{
                    equals: ctx.session.user.email, 
                  }
                } 
              }
            });
          } catch {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: "An unexpected error occured while we tried to fetch the users, please try again later",
              cause: TRPCError,
            })
          }
    })
  })