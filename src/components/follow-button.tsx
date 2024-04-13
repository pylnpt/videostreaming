"use client"

import onFollow from "~/actions/follow";
import { Button } from "./ui/button"
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { api } from "~/utils/api";
import { revalidatePath } from "next/cache";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface FollowButtonProps {
    isFollowing: boolean;
    userId: string
}

export function  FollowButton  ({isFollowing, userId}: FollowButtonProps)  {
    const mutation = api.user.followUser.useMutation();
   
    const handleFollow = () => {
        try {
          // Call the TRPC mutation function to follow/unfollow the user
          const id = userId;
           mutation.mutate({ id });
        } catch (error) {
          console.error('Error following/unfollowing user:', error);
      };
    }
    return (
        <Button 
            variant="default"
            key={userId}
            onClick={handleFollow}>
            Follow
        </Button>
    );
}
