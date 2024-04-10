"use client"

import { User } from "@prisma/client";
import useSideBar from "sidebar/use-sidebar";
import { StreamerItem, StreamerItemSkeleton } from "./streamer-item";

interface RecomendedStreamerProps {
    data: User[] | undefined;
}

export const RecomendedStreamer = ({ data }: RecomendedStreamerProps) => {
    const { collapsed } = useSideBar((state) => state);
    const showLabel = !collapsed && data != undefined && data.length > 0;

    return ( 
        <>
        {showLabel && (
            <div className="pl-6 mb-4">
                <p className="text-small text-muted-foreground">
                    Recomended
                </p>
            </div>
        )}
        <ul className="space-y-2 px-2">
            {data?.map((user) =>(
                <div key={user.id}>
                    {user.name !== null && (
                        <StreamerItem 
                            key={user.id}
                            name={user.name}
                            image={user.image || undefined}
                            isOnline={true} //user.isOnline
                    />
                    )}
                </div>
            ))}
        </ul>
        </>
    );
}
 export const RecomendedStreamerSkeleton = () => {
    return (
        <ul className="px-2">
            {[...Array(3)].map(((_,i)=> (
                <StreamerItemSkeleton key={i} />
            )))}
        </ul>
    )
 } 