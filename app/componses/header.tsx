"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menu = [
  {
    title: "關於代表團",
    route: "about"
  },
  {
    title: "OB故事集",
    route: "posts"
  },
  {
    title: "地區主委團",
    route: "who"
  },
  {
    title: "地區蠢事集",
    route: "stupid"
  },
]

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-20 px-4 py-5 bg-fuchsia-700 flex shadow-lg relative">
      <Link href="/">
        <Image className="h-full" src="/logo.png" alt="logo" width={190} height={40}/>
      </Link>

      <div className={`md:ml-10 flex items-center absolute flex-col top-20 md:top-0 left-0 w-full bg-fuchsia-700 z-20 md:h-full md:relative md:flex-row overflow-hidden transition-all ${open ? 'h-[132px]' : 'h-0'}`}>
        {menu.map(i => (
          <Link href={i.route} key={i.title} className="text-lg text-gray-100 mx-3 md:mt-0 mt-1">
            {i.title}
          </Link>
        ))}
      </div>
      <div
        className="block md:hidden w-5 bg-white h-[2px] absolute right-5 top-1/2 -translate-y-1/2 before:content-[''] before:translate-y-2 before:absolute before:w-5 before:h-[2px] before:bg-white after:content-[''] after:absolute after:w-5 after:h-[2px] after:bg-white after:-translate-y-2"
        onClick={() => setOpen(!open)}
      ></div>
    </div>
  );
}
