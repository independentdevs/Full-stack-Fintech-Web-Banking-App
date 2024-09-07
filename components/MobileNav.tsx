'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "Footer"
import { User } from "lucide-react"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

    return (
    <><section>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </section><section className="w-fulll max-w-[264px]">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer" />
          </SheetTrigger>
      <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="INDEPENDANT logo"
          />
          <h1
            className="text-26 font-ibm-plex-serif font-bold text-black-1">Independant</h1>

        </Link>
        <div className="mobilenav-sheet">
          <SheetClose asChild>
            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                    {sidebarLinks.map((item

        =>{
          const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <SheetClose asChild key={item.route} >
              <Link href={item.route} key={item.label}
          className={cn('mobilenav-sheet_close w-full',{
            'bg-bank-graidient':
            isActive
          })}
          >
            
           <div   className="relative
              size-6">
                <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                fill
                className={cn({
                  'brightness-[3] invert-0':isActive
                })}
                />
            </div>
            <p className={cn("text-black-2",{"!text-white": isActive})}>
                {item.label}
            </p>
              {item.label}

            </Link>
            </SheetClose>
            
          )
        }))}

        USER

            </nav>
          </SheetClose>


          </div>
      </nav>
      
    

              
        
          </SheetContent>
        </Sheet>
      </section>
      </>
    )
  }

export default MobileNav