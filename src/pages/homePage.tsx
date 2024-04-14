"use client"

import { Suspense } from 'react';
import { Toaster } from 'sonner';
import Container from '~/components/container';
import NavBar from '~/components/navigation-bar/navbar';
import { SideBar, SideBarSkeleton } from '~/components/main-side-bar/sidebar';
import { api } from "~/utils/api";
import { Layout } from 'lucide-react';

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
HomePage.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default HomePage;