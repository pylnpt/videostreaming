import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import useSideBar from "sidebar/use-sidebar";
import { cn } from "~/lib/utils";

interface DashBoardcontainerProps {
    children:  React.ReactNode  
}

const DashBoardContainer = ({
    children
}: DashBoardcontainerProps) => {
    const matches = useMediaQuery(`(max-width: 1024px)`);
    const {
        collapsed,
        onCollapse,
        onExpand
    } = useSideBar((state) => state);
    
    useEffect(() => {
        matches ? onCollapse() : onExpand(); 
    }, [matches, onCollapse, onExpand]);
    return (
        <>
        <div>
            {children}
        </div>
        </>
    );
}
 
export default DashBoardContainer;