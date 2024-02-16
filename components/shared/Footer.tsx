import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 max-w-[1440px] mx-auto px-3 border-t dark:border-white my-6">
      <div className="flex sm:flex-row flex-col justify-evenly gap-10 lg:gap-0 mt-5">
        {/* left */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Important Links</h1>
          <Link href={"#"} className="hover:text-green-400">
            Previous Links
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            Tips
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            Suggestions
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            Profit Calculator
          </Link>
        </div>
        {/* middle */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Contact us</h1>
          <Link href={"#"} className="hover:text-green-400">
            Email
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            Need Help?
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            Feedback
          </Link>
        </div>
        {/* right */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <h1 className="text-xl font-semibold">Join us</h1>
          <Link href={"#"} className="hover:text-green-400">
            As an expert
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            As info provider
          </Link>
        </div>
      </div>
      <h1 className="text-center h-10 mt-3">
        © 2023-2024 kolkataff.space | Made with ❤️ by{" "}
        <Link href={"#"} className="hover:text-green-400">
          Shilajit
        </Link>
      </h1>
    </footer>
  );
};

export default Footer;
