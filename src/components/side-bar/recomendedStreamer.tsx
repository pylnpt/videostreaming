"use client"

import { User } from "@prisma/client";
import useSideBar from "sidebar/use-sidebar";

interface RecomendedStreamerProps {
    data: User[] | undefined;
}

const RecomendedStreamer = ({ data }: RecomendedStreamerProps) => {
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
                    {user.name}
                </div>
            ))}
        </ul>
        </>
    );
}
 
export default RecomendedStreamer;