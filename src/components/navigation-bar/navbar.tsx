"use client"

import * as React from "react"

import SignInBtn from "../auth/authButtons"
import { Logo } from "./logo"
import SearchBar from "./search-bar"

const NavBar = () => {
  return (
    <>
    <nav className="fixed top0 w-full h-20 z[49] bg-[#191919] px-2 lg:px-4 flex justify-between items-center shadow-sm">
        <Logo />
        <SearchBar />
        <SignInBtn />
    </nav>
    </>
  )
};
export default NavBar;