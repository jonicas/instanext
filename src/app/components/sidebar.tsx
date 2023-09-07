"use client";
import React, { useState, ComponentProps } from "react";
import { Home, Search, Compass, Heart, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

import Link from "next/link";

export interface SidebarMenuProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

export function SidebarMenu(props: SidebarMenuProps) {
  const pathname = usePathname();
  return (
    <li
      className="rounded-md hover:bg-[--hover-bg-color]"
      data-testid="sidebar-menu-item"
    >
      <Link className="flex flex-row items-center gap-2 p-3" href={props.path}>
        {props.children}
      </Link>
    </li>
  );
}

export function Sidebar() {
  const [menus, setMenus] = useState([
    { title: "Home", path: "/", icon: <Home /> },
    { title: "Search", path: "/search", icon: <Search /> },
    { title: "Explore", path: "/explore", icon: <Compass /> },
    { title: "Notification", path: "/notifications", icon: <Heart /> },
    { title: "Profile", path: "/profile", icon: <UserCircle /> },
  ]);

  return (
    <div className="p-3">
      <div className="flex h-[92px] w-full">INSTA.NEXT</div>
      <ul className="text-lg">
        {menus.map(({ path, title, icon }, index) => (
          <SidebarMenu key={index} path={path} title={title}>
            {icon} {title}
          </SidebarMenu>
        ))}
      </ul>
    </div>
  );
}
