import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIDGAP",
  description:
    "MIDGAP is a simple blog template for headless CMS. It is built with Next.js, Sanity.io and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />{children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
