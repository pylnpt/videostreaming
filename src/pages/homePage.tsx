"use client"

import { Suspense } from 'react';
import Container from '~/components/container';
import NavBar from '~/components/navigation-bar/navbar';
import { SideBar, SideBarSkeleton } from '~/components/main-side-bar/sidebar';
import { api } from "~/utils/api";
import { Layout } from 'lucide-react';

const HomePage = ({
}) => {
    return (
        <>
         <div>HomePage</div>
        </>
    )
}
HomePage.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default HomePage;