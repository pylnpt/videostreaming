"use client"

import onFollow from "~/actions/follow";
import { Button } from "./ui/button"
import { useState, useTransition } from "react";
import { api } from "~/utils/api";
import { revalidatePath } from "next/cache";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

// interface FollowButtonProps {
//     // isFollowing: boolean;
//     userId: string
// }

export async function  FollowButton  (userId)  {
  if (userId !== undefined){
    const mutation = await api.user.followUser.useMutation();
    const handleFollow = () => {
      try {
        // Call the TRPC mutation function to follow/unfollow the user
        const id = userId;
         mutation.mutate({ id });
      } catch (error) {
        console.error('Error following/unfollowing user:', error);
    };
  }
    
   
    


    }
    return (
      <Button>FOLLOWBUTTONCONTECT</Button>
        // <Button 
        //     variant="default"
        //     key={userId}
        //     onClick=(() => )>
        //     Follow
        // </Button>
    );
}
