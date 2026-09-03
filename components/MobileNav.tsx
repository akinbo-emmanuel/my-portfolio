"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "./Nav";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>

      <SheetContent className="flex w-[64vw] max-w-[18rem] flex-col sm:max-w-[18rem]">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        {/* Logo */}
        <div className="mb-20 mt-20 text-left text-2xl">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Emmanuel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col items-start gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setOpen(false)}
              className={`${
                pathname === link.path && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
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
