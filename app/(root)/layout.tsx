import SIDEBAR from "@/components/Sidebar";
import { Sidebar } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName:'Masego' , lastName:'Mashigo' };
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar User={loggedIn} />
        {children}
    </main>
  );
}
