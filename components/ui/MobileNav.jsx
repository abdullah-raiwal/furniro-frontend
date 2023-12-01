import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet >
        <SheetTrigger></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Furniro</SheetTitle>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="hover:border-b-2 hover:border-b-gray-600"
                  href="home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 hover:border-b-gray-600"
                  href="home"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 hover:border-b-gray-600"
                  href="home"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 hover:border-b-gray-600"
                  href="home"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
