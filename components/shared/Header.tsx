import { NavLinks } from "@/constants/NavData";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ThemeModeToggle";

const PCHeader = () => {
  return (
    <header className="h-16">
      <nav className="w-full md:h-full items-center md:flex h-0  justify-between shadow-md p-4">
        {/* Logo */}
        <Link href={"/"}>
          <p className="md:text-2xl font-semibold">
            Kolkata <span className="text-green-400">Fatafat</span>
          </p>
          <p className="text-xs -mt-1">💴 Result sabse pahele 💴</p>
        </Link>
        {/* Nav links */}
        <div className="flex-grow justify-center ml-10 space-x-3">
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
        {/* Right */}
        <div className="items-center space-x-3 hidden lg:flex">
          <Link href="/log-in" className="nav-link">
            Log In
          </Link>
          <Link href="/register" className="nav-link">
            Register
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default PCHeader;
