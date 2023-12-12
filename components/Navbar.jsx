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

import logo from "../public/logo.png";

import { useState, useRef } from "react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const NavRef = useRef(null);

  return (
    <div className="">
      {/* navbar for larger screens */}

      <div className="flex flex-row items-center justify-between pb-5 pt-2 md:px-10 md:pt-5">
        {/* logo and brand name */}
        <div className="flex gap-1">
          <Image src={logo} alt="logo" />
          <h1 className="items-center text-3xl font-bold">Furniro</h1>
        </div>

        {/* nav items */}

        <ul className="hidden gap-16 sm:flex ">
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

        <div className="hidden gap-5 sm:flex">
          <CiUser size={30} className="hover:cursor-pointer" />
          <CiSearch size={30} className="hover:cursor-pointer" />
          <CiHeart size={30} className="hover:cursor-pointer" />
          <CiShoppingCart size={30} className="hover:cursor-pointer" />
        </div>

        {IsOpen ? (
          <IoMdClose
            className="md:hidden"
            size={20}
            onClick={() => setIsOpen(!IsOpen)}
          />
        ) : (
          <IoIosMenu
            ref={NavRef}
            className="md:hidden"
            size={20}
            onClick={() => setIsOpen(!IsOpen)}
            asChild
          />
        )}
      </div>

      <Sheet open={IsOpen} onOpenChange={setIsOpen}>
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
    </div>
  );
};

export default Navbar;
