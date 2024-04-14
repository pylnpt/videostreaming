import { Butterfly_Kids } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { string } from "zod";
import { FollowButton } from "~/components/follow-button";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";


const StreamerPage = () => {
    const { query } = useRouter()
    const userId = query.userId!;
    const fetchUsers = api.user.getUserById.useQuery({id: userId});
    const following = api.user.isFollowing.useQuery({id: fetchUsers.data?.id});
    const asd = async() => {
        try { const lll = await api.user.followUser.useMutation({ id: userId });}
        catch(error){
            console.log(error)
        }
    }
    const dsa = api.user.followUser.useMutation({ id: userId });
    return (
        <>
            <div>
                <p>Name : { fetchUsers.data?.name }</p>
                <p>Email : { fetchUsers.data?.email }</p>
                <img src={ fetchUsers.data?.image? fetchUsers.data?.image : ""} alt="profile image"></img>
                <p>is following : {`${following.data}`}</p>
                {/* <FollowButton 
                    isFollowing={following.data}
                    userId={fetchUsers.data?.id}
                    /> */}
                    <Button onClick={asd}>FOLLOW</Button>
            </div>        
        </> 
    );
}
 
export default StreamerPage;









