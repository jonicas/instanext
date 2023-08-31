"use client";
import React, { useState, ComponentProps } from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  AvatarIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";

export type SidebarMenuProps = {
  key: React.Key;
  title: string;
  path: string;
  children: React.ReactNode;
};

export function SidebarMenu(props: SidebarMenuProps) {
  return (
    <li key={props.key} className="rounded-md hover:bg-[#1a1a1a]">
      <Link className="flex flex-row items-center gap-2 p-3" href={props.path}>
        {props.children}
      </Link>
    </li>
  );
}

export function Sidebar() {
  const [menus, setMenus] = useState([
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "Search", path: "/search", icon: <MagnifyingGlassIcon /> },
    { title: "Explore", path: "/explore", icon: <GlobeIcon /> },
    { title: "Notification", path: "/notifications", icon: <HeartIcon /> },
    { title: "Profile", path: "/profile", icon: <AvatarIcon /> },
  ]);

  return (
    <div className="p-3">
      <div className="h-[92px] w-max">JONICAS</div>
      <ul className="text-lg">
        {menus.map(({ path, title, icon }) => (
          <SidebarMenu key={title} path={path} title={title}>
            {icon} {title}
          </SidebarMenu>
        ))}
      </ul>
    </div>
  );
}
