"use client";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";
import React, { useState } from "react";

export default function FooterContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_SWEET_CODE,
          name: formData.get("name"),
          email: formData.get("email"),
          telno: formData.get("telno"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message has been sent successfully! You will be contacted soon.",
          icon: "success",
        });
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="dark:bg-[rgb(23,23,23)] bg-[rgb(207,207,207)] px-6 sm:px-8 lg:px-12 py-6 w-full md:w-1/2 ">
      <div className="w-full">
      <h4 className="text-2xl xs:text-4xl sm:text-4xl lg:text-5xl text-center mb-5 font-semibold text-light uppercase ">
        <span className="dark:text-white text-[rgb(23,23,23)] font-bold">Reach US</span>
      </h4>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
          />
          <input
            type="tel"
            placeholder="Your Valid Phone Number"
            name="telno"
            required
            className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows={6}
            required
            className="w-full p-2 border rounded-lg shadow-xl border-zinc-200 dark:border-transparent dark:bg-zinc-700 dark:text-gray-300"
          />
          <button
            type="submit"
            className={`w-max text-sm flex items-center justify-center gap-1 shadow-lg p-2 border rounded-md duration-200 transition 
                ${isSubmitting ? "bg-[rgb(23,23,23)]/50 disabled" : "dark:bg-[rgb(23,23,23)] dark:hover:bg-white dark:hover:text-black dark:border-white bg-white border-black hover:text-white hover:bg-[rgb(23,23,23)]"}`}
          >
            {isSubmitting ? "Sending..." : "Send"} <IoIosSend size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
