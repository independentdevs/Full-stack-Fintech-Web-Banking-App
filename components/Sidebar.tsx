'use client'
import { ITEMS, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import PlaidLink from "@/components/PlaidLink";

interface User {
  firstName: string;
  lastName: string;
  email?: string; // Optional
  userId?: string; // Optional
  $id?: string; // Optional
  dwollaCustomerUrl?: string; // Optional
  // other properties...
}

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="INDEPENDANT logo"
          />
          <h1
            className="sidebar-logo">
              Independant Bank</h1>

        </Link>

        {sidebarLinks.map((item => {
          const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link href={item.route} key={item.label}
           className={cn('sidebar-link',{
            'bg-bank-graidient':
            isActive
           })}
           >
            <div
              className="relative
              size-6">
                <Image
                src={item.imgURL}
                alt={item.label}
                fill
                className={cn({
                  'brightness-[3] invert-0':isActive
                })}
                />
            </div>
            <p className={cn("sidebar-label",{"!text-white": isActive})}>
                {item.label}
            </p>
              {item.label}

            </Link>
          )
        }))}
        <PlaidLink user={user}/>
      </nav>
    </section>
  );
};

export default Sidebar;
