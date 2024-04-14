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

   
    // parts != null ? lastString = parts[parts.length - 1] : lastString = ""; 
    const [lastString, setlastString] = useState("");
    const path = usePathname();


    // This effect will run after every render
    useEffect(() => {
        const parts = path.split("/");
        const res : string = parts[parts.length - 1]
        setlastString(res);
        
    }), [];
    
    if(lastString !== 'dashboard'){
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