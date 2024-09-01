import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Sidebar= ({User}):SiderbarProps=>{
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer items-centre gap-2">
                <Image>
                    scr="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="INDEPENDANT logo"
                    className="size-[24px]
                    max-xl:size-14"
                    <h1>
                        className=""
                    </h1>
                    
                </Image>
                </Link>
                

            </nav>

        </section>
    )
}
export default Sidebar