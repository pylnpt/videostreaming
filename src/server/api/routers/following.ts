import { TRPCError } from "@trpc/server";
import {z} from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

  export const followerRouter = createTRPCRouter({
    // getStreamersThatIAmFollowing: 
    //     protectedProcedure.query(async ({ctx}) => {
    //         try {
    //             //SQL STATEMENT: SELECT * FROM FOLLOW WHERE FOLLOWEDBYID = LOGGEDINUSERID;
    //             return await ctx.db.follower.findMany({

    //             })
    //         } catch {
    //             throw new TRPCError({
    //                 code: 'INTERNAL_SERVER_ERROR',
    //                 message: "An unexpected error occured while we tried to fetch all the followers, please try again later",
    //                 cause: TRPCError,
    //               })
    //         }
    //     })

    getAllFollower: 
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
              message: "An unexpected error occured while we tried to fetch all the followers, please try again later",
              cause: TRPCError,
            })
          }
    })
  })