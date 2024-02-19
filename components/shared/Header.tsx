"use client";

import { NavLinks } from "@/constants/NavData";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "lucide-react";

import { ModeToggle } from "./ThemeModeToggle";
import MobileHeader from "./MobileHeader";
import UserDropdown from "./UserDropdown";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-16">
      <nav className="w-full md:h-full items-center flex h-20 justify-between shadow-md p-4">
        {/* Left */}
        <div className="flex items-center lg:space-x-0 gap-3">
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu aria-hidden="true" className="h-6 w-6" />
            <span className="sr-only">Open main menu</span>
          </button>

          {/* Logo */}
          <div className="flex space-x-2 items-center">
            <Link href={"/"}>
              <Image src="/logo.png" alt="logo" width={40} height={40} />{" "}
            </Link>
            <Link href={"/"}>
              <p className="md:text-2xl font-semibold">
                Kolkata<span className="text-green-400">FF</span>.space
              </p>
              <p className="text-xs -mt-1">💴 Result sabse pahele 💴</p>
            </Link>
          </div>
          {/* Nav links */}
          <div className="flex-grow justify-center ml-10 space-x-3 lg:flex hidden">
            {NavLinks.map((navItem) => (
              <Link
                href={navItem.link}
                key={navItem.heading}
                className="nav-link"
              >
                {navItem.heading}
              </Link>
            ))}
          </div>
        </div>
        {/* Right */}

        <div className="items-center space-x-3 hidden lg:flex">
          {/* Render if not logged in */}
          <Link href="/log-in" className="nav-link">
            Log In
          </Link>
          <Link href="/register" className="nav-link">
            Register
          </Link>

          {/* Render if logged in */}
          {/* <UserDropdown /> */}
          <ModeToggle />
        </div>

        <div className="lg:hidden">
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <MobileHeader
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Header;
