import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./components/sidebar";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta.Next",
  description: "by Jonicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-sm ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen w-full bg-white text-white dark:bg-black">
            <div className="fixed top-0 hidden h-screen w-[245px] border-r md:block 2xl:w-[335px]">
              <Sidebar></Sidebar>
            </div>
            <main className="flex min-h-screen w-full flex-col items-center justify-between md:ml-[245px] 2xl:ml-[335px]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
