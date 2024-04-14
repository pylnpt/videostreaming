import  Image  from "next/image";
import Link from "next/link";
import LogoIcon from "/public/logo.png"

export const Logo = () => {
    return (
        <>
            <Link href="/">
                <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                    <div className="bg-primary rounded-full p-1 mr-12 shrink-0">
                        <Image 
                            src={LogoIcon} 
                            alt="streamLogo"
                            width={32}
                            height={32}/>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-lg font-semibold text-navbar-font">Thesis</p>
                        <p className="text-xs text-muted-foreground text-navbar-font">Streamer Dashboard</p>
                    </div>
                </div>
            </Link>
        </>
    )
}