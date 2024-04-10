"use client"

import Container from '~/components/container';
import NavBar from '~/components/navigation-bar/navbar';
import SideBar from '~/components/side-bar/sidebar';

const HomePage = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
                <SideBar />
                <Container>
                    <div>HomePage</div>
                    {children}
                </Container>
            </div>
        </>
    )
}

export default HomePage;