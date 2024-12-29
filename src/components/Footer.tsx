import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full bg-black  mt-12">
      <section className=" px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 ">
        <div className="flex justify-center items-center gap-x-2 text-sm text-light">
          <p className="">
            Developed
            <span>&nbsp;💖&nbsp;with&nbsp;</span>
          </p>
          <Link href={"https://nextjs.org/"} target="_blank">
            <Image src="/nextjs.svg" alt="next.js 14" width={24} height={24} />
          </Link>
          <span className="text-light">&nbsp;&&nbsp;</span>
          <Link href={"https://sanity.io/"} target="_blank">
            <Image src="/sanity.svg" alt="sanity" width={24} height={24} />
          </Link>
        </div>

        <div>
          <p className="text-xs text-light w-max  flex justify-center items-center">
            © 2024 <span className="text-light font-bold">&nbsp;MID</span>
            <span className="text-light/50 font-bold flex justify-center items-center mr-1">
              <Image src="/icon.ico" alt="next.js 14" width={24} height={24} />
              GAP
            </span>{" "}
            | All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
