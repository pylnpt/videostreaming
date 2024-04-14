import Link from "next/link";
import {Button} from "~/components/ui/button";
import useSideBar from "sidebar/use-sidebar";
import { Skeleton } from "../ui/skeleton";
import { LogOut } from "lucide-react";

interface DashBoardActionProps {
    name : string;
    image: string | undefined;
    isOnline?: boolean;
}

export const DashBoardActions = (
    
) => {
    const { collapsed } = useSideBar((state) => state);
    return (  
    <>
        <div className="flex items-center justify-end gap-x-2">
            <Button variant="ghost" 
                className="bg-primary text-navbar-bg hover:text-primary"
                size="sm"
                asChild>                
                <Link href="/">
                    <LogOut className="h-5 w-5 mr-2"/>
                    Exit
                </Link>
            </Button>
        </div>
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