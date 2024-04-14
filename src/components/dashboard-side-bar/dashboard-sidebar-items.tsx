
import { usePathname } from "next/navigation";
import {
    Fullscreen,
    KeyRound,
    MessageSquare,
    Users
} from "lucide-react";
import DashboardSidebarItem from "./dashboard-sidebar-item";
import { DashboardSideBarSkeleton } from "./dashboard-sidebar";

const DashBoardSideBarItems = () => {
    const pathName = usePathname();  
    // const user = user.getUserByID ---> TODO: IMPLEMENT IT HERE TOO!
    const userName = "John Doe" //TEMPORARY
    const routes = [
        {
            label: "Stream",
            href: `/user/${userName}/stream`,
            icon: Fullscreen
        },
        {
            label: "Keys",
            href: `/user/${userName}/keys`,
            icon: KeyRound
        },
        {
            label: "Chat",
            href: `/user/${userName}/chat`,
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