import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu, Mountain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-primary">
          <Link className="mr-6 hidden lg:flex" href="#">
            <Mountain className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              About
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Services
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="#"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex items-center justify-center" href="#">
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
        <span className="font-bold mx-3">Facessories</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 bg-primary">
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
          href="#"
        >
          Home
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
          href="#"
        >
          About
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
          href="#"
        >
          Services
        </Link>
        <Link
          className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}