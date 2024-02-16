import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 max-w-7xl mx-auto px-3 border-t dark:border-white my-6">
      <div className="flex sm:flex-row flex-col justify-evenly mt-5">
        {/* left */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-lg font-semibold">Important Links</h1>
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
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-lg font-semibold underline">Contact us</h1>
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
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-lg font-semibold underline">Join us</h1>
          <Link href={"#"} className="hover:text-green-400">
            As an expert
          </Link>
          <Link href={"#"} className="hover:text-green-400">
            As informative
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
