import { Suspense } from "react";
import NavBar from "./navigation-bar/navbar";
import { SideBar, SideBarSkeleton } from "./side-bar/sidebar";
import Container from "./container";

const Layout = ({children} : {children : React.ReactNode}) => {
    return (  
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <Suspense fallback={<SideBarSkeleton/>}>
                    <SideBar />
                </Suspense>
                <Container>
                    {children}
                    {/* <div>HomePage</div> */}
                </Container>
            </div>
        </>
    );
}
 
export default Layout;