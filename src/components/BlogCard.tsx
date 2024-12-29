"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col justify-between h-[480px] rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      
      <Link href={`/blog/${post.slug}`} className="relative max-h-76 flex-1">
        <Image
          src={urlFor(post.image).url()}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </Link>

      <Link href={`/blog/${post.slug}`} className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {post.summary}
        </p>
          <button className="block px-4 py-1 w-full text-center dark:bg-[rgb(182,120,62)] hover:dark:bg-[rgb(255,173,96)] bg-[rgb(23,23,23)]  rounded dark:text-dark text-light font-semibold mt-4 duration-200 transition-all">
          Read More
          </button>
      </Link>
    </section>
  );
}
