import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

export default function FooterLearn() {
  return (
    <section className="bg-[rgb(41,41,41)] px-6 sm:px-8 md:px-12 py-6 flex flex-col items-center justify-start gap-y-10 w-full md:w-1/2">
      <h4 className="text-2xl xs:text-4xl sm:text-4xl lg:text-5xl font-semibold uppercase">
        <span className="text-white font-bold">Connect Us</span>
      </h4>
      <div className="flex flex-col justify-start items-start w-full gap-3">
        <Link
          href={"mailto:syedaliaskarizaidi1@mail.com"}
          className="flex justify-center items-center gap-1"
        >
          <strong className="flex justify-center items-center gap-1 text-light">
            <CiMail /> Mail:
          </strong>{" "}
          <span className="text-white/90">syedaliaskarizaidi1@mail.com</span>
        </Link>
        <Link
          href={"tel:+923192046516"}
          className="flex justify-center items-center gap-1"
        >
          <strong className="flex justify-center items-center gap-1 text-light">
            <BsTelephone /> Tel:
          </strong>{" "}
          <span className="text-white/90">+92 (319) 2046516</span>
        </Link>
        <div className="mt-6 w-full h-64 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7241.354050848587!2d67.17500469999997!3d24.840716400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1735377103867!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
