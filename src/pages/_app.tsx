import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps, type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { cn } from "~/lib/utils";
import { Inter as FontSans } from "next/font/google"
import Layout from "~/components/layouts/layout";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  
  return (
    <SessionProvider session={session}>
      
      <main className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
