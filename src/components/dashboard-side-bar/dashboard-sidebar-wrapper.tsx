"use client"
import useSideBar from "sidebar/use-sidebar";
import { cn } from '~/lib/utils'


interface DashboardSideBarWrapperProps {
    children : React.ReactNode;
}

const DashboardSideBarWrapper = ({ 
    children,
 }: DashboardSideBarWrapperProps) => {
    const { collapsed } = useSideBar((state) => state);

    return (  
        <aside 
            className={cn("fixed left-0 flex flex-col w-60 h-full bg-sidebar-bg text-sidebar-font z-50 border-sidebar-border z-50",
                collapsed && 'w-[70px]'
            )}>
            {children}
        </aside>
    );
}
 
export default DashboardSideBarWrapper;