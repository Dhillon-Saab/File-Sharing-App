"use client";
import { File, Shield, Upload, icons } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function SideNav() {

  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full bg-black">
      <div className="p-5 border-b">
        <svg
          id="logo-72"
          width="52"
          height="44"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            class="ccustom"
            fill="#EEE5E9"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col ">
        {menuList.map((menuItem, index) => {
          return (
            <Link href={menuItem.path}>
              <button
                className={`border-b w-full flex gap-4 items-center py-5 align-middle justify-center hover:text-gray-400 hover:font-[900] hover:bg-zinc-900 ${
                  activeIndex == index? "bg-slate-900": null
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <menuItem.icon />
                <h2 className="font-bold text-[24px]">{menuItem.name}</h2>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
