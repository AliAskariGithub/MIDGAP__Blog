import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between xs:flex-row py-2 border-b-2 px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 border-dark/50 dark:border-light/50  sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
      <h1 className="flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          MID
          <span className="text-3xl text-dark/50 dark:text-light/50">GAP</span>
        </Link>
      </h1>

      <div className="flex justify-center items-center w-40 gap-2">
        <Link
          href={"https://www.linkedin.com/in/ali-askari-355257308/"}
          className="hover:opacity-50 duration-200 transition-all"
        >
          <FaLinkedin size={25} />
        </Link>
        <Link
          href={"https://github.com/AliAskariGithub"}
          className="hover:opacity-50 duration-200 transition-all"
        >
          <FaGithub size={25} />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=61564881342854"}
          className="hover:opacity-50 duration-200 transition-all"
        >
          <FaFacebook size={25} />
        </Link>
        <Link
          href={"https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"}
          className="hover:opacity-50 duration-200 transition-all"
        >
          <FaTwitter size={25} />
        </Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}
