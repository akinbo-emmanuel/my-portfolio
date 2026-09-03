import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="py-5 text-foreground sm:py-6 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl font-semibold sm:text-3xl xl:text-4xl">
            Emmanuel<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire ME button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile NAv */}
        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
