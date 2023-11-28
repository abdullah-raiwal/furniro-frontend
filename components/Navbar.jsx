"use client";
import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Label } from "@/components/ui/label";

import logo from "../public/logo.png";

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

import { useState } from "react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      {/* navbar for larger screens */}

      <div className="flex flex-row items-center justify-between pt-2 md:pt-5 md:px-10 pb-5">
        {/* logo and brand name */}
        <div className="flex gap-1">
          <Image src={logo} alt="logo" />
          <h1 className="font-bold items-center text-3xl">Furniro</h1>
        </div>

        {/* nav items */}

        <ul className="hidden md:flex gap-16">
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

        {/* logos */}

        <div className="hidden md:flex gap-5">
          <CiUser size={30} />
          <CiSearch size={30} />
          <CiHeart size={30} />
          <CiShoppingCart size={30} />
        </div>

        {IsOpen ? (
          <IoMdClose
            className="md:hidden"
            size={20}
            onClick={() => setIsOpen(!IsOpen)}
          />
        ) : (
          <IoIosMenu
            className="md:hidden"
            size={20}
            onClick={() => setIsOpen(!IsOpen)}
          />
        )}
      </div>

      {IsOpen && (
        <Sheet open={IsOpen} onOpenChange={() => setIsOpen(!IsOpen)}>
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
      )}
    </div>
  );
};

export default Navbar;
