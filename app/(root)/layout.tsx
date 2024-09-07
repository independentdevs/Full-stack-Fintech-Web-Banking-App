import SIDEBAR from "@/components/Sidebar";
import { Sidebar } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName:'Masego' , lastName:'Mashigo' };
  if(!loggedIn) redirect('/sign-in')
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar User={loggedIn} />
        <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
        {children}
    </main>
  );
}
