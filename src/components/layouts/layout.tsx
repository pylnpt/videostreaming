import { Suspense, useEffect, useState } from "react";
import NavBar from "../navigation-bar/navbar";
import { SideBar, SideBarSkeleton } from "../main-side-bar/sidebar";
import Container from "../container";
import { usePathname } from "next/navigation";
import { DashboardSideBar } from "../dashboard-side-bar/dashboard-sidebar";
import { string } from "zod";
import DashboardNavBar from "../dashboard-navigation-bar/dashboard-navbar";
import DashBoardContainer from "../dashboard-side-bar/dashboard-container";

const Layout = ({children} : {children : React.ReactNode}) => {
    const [isDashboardView, setIsDashboardView] = useState(false);
    const path = usePathname();


    useEffect(() => {
        if(path !== null){
            const parts = path.split("/");
            parts[1] === "dashboard" ?  setIsDashboardView(true) : setIsDashboardView(false);
        }
    }), [];
    
    if(!isDashboardView){
        return (  
            <>
                <NavBar />
                <div className="flex h-full pt-20">
                    <Suspense fallback={<SideBarSkeleton/>}>
                        <SideBar />
                    </Suspense>
                    <Container>
                        {children}
                    </Container>
                </div>
            </>
        )
    }  else {
        return (  
            <>
                <DashboardNavBar />
                <div className="flex h-full pt-20">
                    <Suspense fallback={<SideBarSkeleton/>}>
                        <DashboardSideBar />
                    </Suspense>
                    <DashBoardContainer>
                        {children}
                    </DashBoardContainer>
                </div>
            </>
        )
    }
    
}
 
export default Layout;