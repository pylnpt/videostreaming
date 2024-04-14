"use client"
import useSideBar from "sidebar/use-sidebar";
import { cn } from '~/lib/utils'


interface SideBarWrapperProps {
    children : React.ReactNode;
}

const SideBarWrapper = ({ 
    children,
 }: SideBarWrapperProps) => {
    const { collapsed } = useSideBar((state) => state);

    return (  
        <aside 
            className={cn("fixed left-0 flex flex-col w-60 h-full bg-sidebar-bg text-sidebar-font z-50 border-sidebar-border",
                collapsed && 'w-[70px]'
            )}>
            {children}
        </aside>
    );
}
 
export default SideBarWrapper;