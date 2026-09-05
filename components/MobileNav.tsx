"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "./Nav";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex h-11 w-11 items-center justify-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>

      <SheetContent className="flex w-[64vw] max-w-[18rem] flex-col sm:max-w-[18rem]">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        {/* Logo */}
        <div className="mb-14 mt-16 text-left text-2xl">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <h1 className="text-3xl font-semibold">
              Emmanuel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col items-start gap-3">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } flex min-h-11 items-center text-xl capitalize transition-colors hover:text-accent`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
