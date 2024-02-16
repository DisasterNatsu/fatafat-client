import { ArrowLeftSquare, BookA, IndianRupee, Lock } from "lucide-react";

export const NavLinks: NavDataType[] = [
  {
    heading: "Kolkata FF Result",
    link: "/",
    icon: IndianRupee,
  },
  {
    heading: "Old Results",
    link: "/prev-res",
    icon: ArrowLeftSquare,
  },
  {
    heading: "About Us",
    link: "/about",
    icon: BookA,
  },
  {
    heading: "Privacy",
    link: "/privacy",
    icon: Lock,
  },
];
