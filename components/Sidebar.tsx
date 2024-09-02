import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SiderbarProps {
  User: User;
}

const Sidebar = ({ User }: SiderbarProps) => {
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

        </Link>
      </nav>
    </section>
  );
};

export default Sidebar;
