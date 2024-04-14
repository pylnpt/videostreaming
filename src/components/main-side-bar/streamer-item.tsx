"use-client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/lib/utils";
import {Button} from "~/components/ui/button";
import useSideBar from "sidebar/use-sidebar";
import {StreamerAvatar} from "~/components/streamer-avatar";
import { Skeleton } from "../ui/skeleton";
import OnlineStreamerBadge from "../online-streamer-badge";

interface StreamerItemProps {
    name : string;
    image: string | undefined;
    isOnline?: boolean;
}

export const StreamerItem = ({
    name,
    image,
    isOnline,
}: StreamerItemProps) => {
    const pathName = usePathname();
    const { collapsed } = useSideBar((state) => state);
    const href = `/${name}`;
    const isActive = pathName === href;

    return (  
    <>
        <Button 
            asChild
            variant="ghost"
            className={cn(
                "w-full h-12",
                collapsed? "justify-center" : "justify-start",
                isActive && "bg-accent",
            )}>
                <Link href={href}>
                    <div className={cn(
                        "flex items-center w-full gap-x-4",
                        collapsed && "justify-center",
                    )}>
                        <StreamerAvatar
                            image={image}
                            name={name}
                            isOnline={isOnline}
                            showBadge
                        />
                        {!collapsed && (<p className="truncate">{name}</p>)}
                        {!collapsed && isOnline && (
                            <OnlineStreamerBadge className="ml-auto"/>
                        )}
                    </div>
                </Link>
        </Button>
    </>
    );
};

export const StreamerItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[30px] min-w-[30px] rounded-full" />
            <div className="flex-1">
                <Skeleton className="h-6" />
            </div>
        </li>
    )
}