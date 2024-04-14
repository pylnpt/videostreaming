"use client"

import useSideBar from "sidebar/use-sidebar";
import { Button } from "../ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import HintTooltip from "../hint";
import { useSession } from "next-auth/react";

const DashBoardToggleButton = () => {
    const { data: session }= useSession();
    const {
        collapsed,
        onExpand,
        onCollapse
    } = useSideBar((state) =>state)
    const label = collapsed ? 'Expand' : 'Collapse';
    
    return ( 
        <>
        {collapsed && (
            <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                <HintTooltip label={label} side="right" asChild>
                    <Button variant="ghost"
                        className="h-auto p-2"
                        onClick={onExpand}>
                        <ArrowRightFromLine className="h-4 w-4"/>
                    </Button>
                </HintTooltip>
            </div>
        )}
        {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                {session?.user && (
                <p className="font-semibold text-primary">
                    Dashboard
                </p>
            )}
            
            <div className="p-3 pl-6 mb-2 flex items-center w-full">
                <HintTooltip label={label} side="right" asChild>
                    <Button className="h-auto p-2 ml-auto" 
                        onClick={onCollapse}
                        variant="ghost">
                        <ArrowLeftFromLine className="h-4 w-4"/>
                    </Button>
                </HintTooltip>
            </div>
            </div>
            
        )}
        </> 
    );
}
 
export default DashBoardToggleButton;