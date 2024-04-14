import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import SideBarWrapper from "./sidebar-wrapper";
import ToggleButton from "./toggle-button";
import { RecomendedStreamer, RecomendedStreamerSkeleton } from "./recomendedStreamer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Skeleton } from "../ui/skeleton";

export const SideBar =  () => {
    const { data: session } = useSession();
    const fetchUsers = api.user.getAllUser.useQuery();  

        return ( 
            <>
                <SideBarWrapper>
                    <ToggleButton />
                    {session?.user && (
                        <div className="space-y-4 pt-4 lg:pt-0">
                        <RecomendedStreamer data={fetchUsers.data}/>
                    </div>
                    )}
                </SideBarWrapper>
            </>
         );
}

export const SideBarSkeleton = () => {
    return (
        <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60
        h-full bg-sidebar-bg border-r border-sidebar-border z-50'>
            <RecomendedStreamerSkeleton/>
        </aside>
    )
}