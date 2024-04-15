
import { usePathname } from "next/navigation";
import {
    Fullscreen,
    KeyRound,
    MessageSquare,
    Users
} from "lucide-react";
import DashboardSidebarItem from "./dashboard-sidebar-item";
import { DashboardSideBarSkeleton } from "./dashboard-sidebar";
import { useSession } from "next-auth/react";

const DashBoardSideBarItems = () => {
    const pathName = usePathname(); 
    const { data: session } = useSession(); 
    // const user = user.getUserByID ---> TODO: IMPLEMENT IT HERE TOO!
    const userName = "John Doe" //TEMPORARY it si goig to be userId
    const routes = [
        {
            label: "Stream",
            href: `/dashboard/${session?.user.id}/stream`,
            icon: Fullscreen
        },
        {
            label: "Keys",
            href: `/dashboard/${session?.user.id}/keys`,
            icon: KeyRound
        },
        {
            label: "Chat",
            href: `/dashboard/${session?.user.id}/chat`,
            icon: MessageSquare
        },
    ];

    //get the username after use this in loadingstate
    // if(!userName) {
    //     return (
    //         <ul className="space-y-2">
    //             {[...Array(4).map((_, i)) =>(
    //                 <DashboardSideBarSkeleton key={i} />
    //             )]}
    //         </ul>
    //     ) 
    // }

    return ( 
        <>
            <ul className="space-y-2 px-2 pt-4 lg:pt-0">
            {routes.map((route) =>(
                <DashboardSidebarItem 
                    key={route.href}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                    isActive={pathName == route.href}
                />
            )) }
            </ul>
        </>
     );
}
 
export default DashBoardSideBarItems;