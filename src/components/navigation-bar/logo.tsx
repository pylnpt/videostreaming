import  Image  from "next/image";
import Link from "next/link";
import LogoIcon from "/public/logo.png"

export const Logo = () => {
    return (
        <>
            <Link href="/">
                <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
                    <div className="bg-[#3DD68C] rounded-full p-1">
                        <Image 
                            src={LogoIcon} 
                            alt="streamLogo"
                            width={32}
                            height={32}/>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Thesis</p>
                        <p className="text-xs text-muted-foreground">Streaming webapp with the use of AI</p>
                    </div>
                </div>
            </Link>
        </>
    )
}