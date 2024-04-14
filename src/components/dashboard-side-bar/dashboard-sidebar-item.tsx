import { LucideIcon } from "lucide-react";
import  Link  from "next/link";
import useSideBar from "sidebar/use-sidebar";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { Rethink_Sans } from "next/font/google";
import { Skeleton } from "../ui/skeleton";

interface DashboardSidebarItemProps {
    label: string,
    icon: LucideIcon,
    href: string,
    isActive: boolean,
}

const DashboardSidebarItem  = ({
    label,
    icon: Icon,
    href,
    isActive,
}: DashboardSidebarItemProps) => {
    const {collapsed} = useSideBar((state)=> state)
    return ( 
    <>
        <Button asChild
        variant="ghost"
        className={cn(
            "w-full h-12",
            collapsed? "justify-center": "justify-start",
            isActive && "bg-accent"
        )}>
            <Link href={href}>
                <div className="flex items-center gap-x-4">
                    <Icon className={cn("h-4 w-4", collapsed? "mr-0" : "mr-2")} />
                    {!collapsed && (
                        <span>{label}</span>
                    )}
                </div>
            </Link>
        </Button>
    </>
    );
}
 
export default DashboardSidebarItem ;
export const DashBoardItemSkeleton = () => {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[50px] min-w-[50px] rounded-md" />
            <div className="flex-1 hidden lg:block">
                <Skeleton className="h-6" />
            </div>

        </li>
    )
}