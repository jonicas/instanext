"use client";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@/types";
import React from "react";
import { AlignVerticalSpaceAround } from "lucide-react";

export interface UserProfileCountersProps
  extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

export const UserProfileCounters = ({
  user,
  className,
}: UserProfileCountersProps) => {
  return (
    <div className={`flex w-full justify-evenly md:gap-5 ${className}`}>
      <div className="gap-1 text-center md:flex">
        <div>{user.counters.posts}</div> posts
      </div>
      <div className="gap-1 text-center md:flex">
        <div>{user.counters.followers}</div> followers
      </div>
      <div className="gap-1 text-center md:flex">
        <div>{user.counters.following}</div> following
      </div>
    </div>
  );
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const user: User = {
    name: "Jonathan",
    username: "jonysilva",
    counters: { followers: 323, posts: 170, following: 533 },
    description: "Software developer | Brasil | Goiânia",
  };
  return (
    <div className="flex min-h-screen w-full max-w-[934px] flex-col gap-3 bg-white pt-10 text-white dark:bg-black md:gap-10">
      <header className="flex flex-col p-4 md:flex-row md:gap-24">
        <div className="flex justify-center md:w-[290px]">
          <Avatar className="h-[77px] w-[77px] md:h-[150px] md:w-[150px]">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </div>
        <section className="flex flex-col gap-5">
          <h1>{user.username}</h1>
          <UserProfileCounters user={user} className="hidden md:flex" />
          <div>
            <p>{user.name}</p>
            <p>{user.description}</p>
          </div>
        </section>
      </header>
      <div className="flex w-full max-w-full justify-start gap-16 overflow-auto p-1 px-[48px] md:h-[130px]">
        {Array.from(new Array(6)).map((n, i) => (
          <Link
            key={i}
            href="#"
            className="flex flex-col content-between items-center gap-1"
          >
            <div className="h-[77px] w-[77px] rounded-full bg-slate-400"></div>
            <span>Berlim</span>
          </Link>
        ))}
      </div>

      <UserProfileCounters user={user} className="md:hidden" />

      <div className="flex h-[44px] w-full items-center justify-around p-1 text-lg md:justify-center md:gap-5">
        <Link href="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`lucide lucide-grid-3x3 ${
              pathname === "/profile" && "text-blue-500"
            }`}
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
          </svg>
        </Link>
        <Link href="/profile/feed">
          <AlignVerticalSpaceAround
            className={`${pathname === "/profile/feed" && "text-blue-500"}`}
          />
        </Link>
      </div>
      {children}
    </div>
  );
}
