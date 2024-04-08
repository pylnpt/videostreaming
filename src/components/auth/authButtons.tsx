"use client"

import { signIn, signOut,useSession } from "next-auth/react";
import { Button } from "../ui/button";
import  Image  from "next/image";

import GoogleLogo from "/public/google.png"

const SignInBtn = () => {
    const { data: session }= useSession();

    if(session && session.user) {
        return (
            <>
                <div>{"Signed in as " + session.user.name }</div>
                <Button onClick={() => signOut({redirect: false})}>
                    <Image 
                        src={GoogleLogo} 
                        alt="googleLogo"
                        width={20}
                        height={20}
                    />
                    <span className="ml-4">Sign out</span>
                </Button>
            </>
        )   
    };
    return (
        
        <>
            <Button onClick={() =>signIn()}>
                <Image 
                    src={GoogleLogo} 
                    alt="googleLogo"
                    width={20}
                    height={20}
                />
                <span className="ml-4">SignIn</span>
            </Button>
        </>
    );
};

export default SignInBtn;