import ContactUs from "@/components/ContactUs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full container-size">
      <div className="absolute top-0 left-0 w-full h-full bg-images"></div>
      
      <div className="absolute top-0 left-0 w-full h-[90vh] bg-black/50"></div>

      <div className="z-10 mb-4 flex flex-col justify-center items-center h-screen py-20 gap-y-10 text-white">
        <h1 className="font-light text-6xl text-center">
          Publish your passions, your way
        </h1>
        <h3 className="text-2xl text-center font-bold">
          Create a unique and beautiful blog easily.
        </h3>
        <div className="flex justify-center items-center gap-2">
        <Link href={"/studio"}>
          <button className="uppercase text-sm bg-gradient">
            Create Your Blog
          </button>
        </Link>
        <Link href={"/blog"}>
          <button className="uppercase text-sm bg-gradient-2">
            View Blogs
          </button>
        </Link>
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
