import SIDEBAR from "@/components/Sidebar";
import { Sidebar as lucideSidebar, SidebarIcon } from "lucide-react";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn: User = {
    firstName: 'Masego',
    lastName: 'Mashigo',
    email: 'masego@example.com', // Added email
    userId: '12345', // Added userId
    $id: 'abc123', // Added $id
    dwollaCustomerUrl: 'url',
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: ""
  };

  if (!loggedIn) redirect('/sign-in');

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
