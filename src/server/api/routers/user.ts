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
    }),
    isFollowing:
      protectedProcedure.input(z.object({ id: z.string()}))
        .query(async ({ctx, input}) => {
        try {
          const otherUser =  await ctx.db.user.findUnique({
            where: {
              id: input.id
            }
          })

          if(!otherUser){
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: "User not found, please try again later",
              cause: TRPCError,
            })
          }

          if(otherUser.id === ctx.session.user.id){
            return true;
          }

          const existingFollower = await ctx.db.follow.findFirst({
            where: {
              followerId : ctx.session.user.id,
              followingId: otherUser.id
            },
          })
          return !!existingFollower;
        } catch { return false; }
      }),
      
      getUserById:
        protectedProcedure.input(z.object({ id: z.string()}))
          .query(async ({ctx, input}) => {
          try{
            const user =  await ctx.db.user.findUnique({
              where: {
                id:input.id
              }
            })

            return user;
          } catch {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: "Something went wrong while we tried to fetch the user. Please try again later",
              cause: TRPCError,
            }) 
          }
        }),
     
      followUser:
        protectedProcedure.input(z.object({ id: z.string()}))
        .mutation(async ({ ctx, input }) => {
          try{
            const otherUser =  await ctx.db.user.findUnique({
              where: {
                id: input.id
              }
            })

            if(!otherUser){
              throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: "User not found, please try again later",
                cause: TRPCError,
              })
            }

            if(otherUser.id === ctx.session.user.id){
              throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: "Can't follow yourself!",
                cause: TRPCError,
              })
            }

          const existingFollow = await ctx.db.follow.findFirst({
            where: {
              followerId : ctx.session.user.id,
              followingId: otherUser.id
            },
          })

          if(existingFollow){
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: "Already following the user",
              cause: TRPCError,
            })
          }

          const follow = await ctx.db.follow.create({
            data: {
              followerId : ctx.session.user.id,
              followingId: otherUser.id
            },
            include: {
              following: true,
              follower: true
            },
          })
            return follow;
          } catch {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: "Something went wrong while we tried update the subsription",
              cause: TRPCError,
            }) 
          }
        }), 
  })