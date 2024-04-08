import  Header  from "~/components/head"
import { Button } from "~/components/ui/button"

import  HomePage  from "~/pages/homePage"


import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Header />
      <HomePage />
      {/* <AuthShowcase /> */}
    </>
  );
}