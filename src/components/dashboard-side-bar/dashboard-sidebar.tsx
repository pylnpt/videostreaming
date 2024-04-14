import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

import DashBoardSideBarWrapper from "./dashboard-sidebar-wrapper";
import DashBoardToggleButton from "./dashboard-toggle-button";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Skeleton } from "../ui/skeleton";
import { DashBoardActions } from "./dashboard-actions";
import { RecomendedStreamerSkeleton } from "../main-side-bar/recomendedStreamer";
import { Button } from "../ui/button";
import DashBoardSideBarItems from "./dashboard-sidebar-items";

export const DashboardSideBar =  () => {
    const { data: session }= useSession();
    const fetchUsers = api.user.getAllUser.useQuery();  
    console.log(fetchUsers.data);
 
    return ( 
        <>
            <DashBoardSideBarWrapper>
                <DashBoardToggleButton />
                {session?.user && (
                    <div className="space-y-4 pt-4 lg:pt-0">
                    <DashBoardSideBarItems/>
                </div>
                )}
            </DashBoardSideBarWrapper>
        </>
     );
}

export const DashboardSideBarSkeleton = () => {
    return (
        <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60
        h-full bg-sidebar-bg border-r border-sidebar-border z-50'>
            <RecomendedStreamerSkeleton/>
        </aside>
    )
}