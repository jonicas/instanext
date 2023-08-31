import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./components/sidebar";

import { useDarkMode } from "@/hooks/useDarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instaclone",
  description: "Cloned by Jonicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-12 justify-center bg-white text-white dark:bg-black">
          <div className="fixed top-0 col-span-4 h-screen w-[335px] border-r border-r-gray-50">
            <Sidebar></Sidebar>
          </div>
          <main className="col-span-12 flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
