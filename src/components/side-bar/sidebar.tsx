import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import SideBarWrapper from "./sidebar-wrapper";
import ToggleButton from "./toggle-button";
import RecomendedStreamer from "./recomendedStreamer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SideBar =  () => {
    const { data: session }= useSession();
    const { query } = useRouter();
    const fetchUsers = api.user.getAllUser.useQuery();  
    console.log(fetchUsers.data);
 
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
 
export default SideBar;
