"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: "Trang chủ", href: "#" },
  { name: "Về chúng tớ", href: "#about" },
  { name: "Sự kiện", href: "#event" },
  { name: "Cộng đồng", href: "#community" },
  { name: "Đối tác", href: "#business-partners" },
];

const Navbar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="border-b border-primary bg-black/5 backdrop-blur-sm overflow-hidden fixed w-full z-50">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl relative">
        <Link href="/">
          <div className="flex gap-5">
            <div className="w-[113px] h-[62px] relative">
              <Image
                src="/logo.svg"
                alt="logo"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </Link>
        <nav className="hidden gap-10 m-0 p-0 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx} className={`text-lg font-bold ${
              hoveredLink === link.name
                ? "text-primary border-b-4 border-primary"
                : "text-white"
            }`}>
              <Link href={link.href} passHref>
                <p
                  className="py-4"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </p>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
