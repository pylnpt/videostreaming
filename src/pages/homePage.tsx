"use client"

import { Suspense } from 'react';
import { Toaster } from 'sonner';
import Container from '~/components/container';
import NavBar from '~/components/navigation-bar/navbar';
import { SideBar, SideBarSkeleton } from '~/components/side-bar/sidebar';
import { api } from "~/utils/api";

const HomePage = ({
}) => {
    return (
        <>
        <Toaster theme='dark' position='bottom-left'/>
        <NavBar />
            <div className="flex h-full pt-20">
                <Suspense fallback={<SideBarSkeleton/>}>
                    <SideBar />
                </Suspense>
                <Container>
                    <div>HomePage</div>
                    {/* {children} */}
                </Container>
            </div>
        </>
    )
}

export default HomePage;