'use client'

import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Logo from "@/public/images/logo-transparente-white.png";
import Image from "next/image";
import Link from "next/link";
import { Menus } from "./settings";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`
        h-screen p-2 pt-8 relative bg-transparent border-r border-gray-700
        ${open ? '' : 'w-16'} 
      `}
    >
      <SlArrowLeft
        size={32}
        color="slate"
        className={`
          absolute cursor-pointer -right-10 top-9 w-22 p-2 rounded-full duration-150 ease-in-out bg-slate-800
          ${!open && 'rotate-180'}
        `}
        onClick={() => setOpen(!open)}
      />
      <div className={`flex gap-2 p-2 items-center`}>
        <Image
          alt="Logotipo"
          width={28}
          src={Logo}
          className="cursor-pointer duration-500"
          onClick={() => setOpen(!open)}
        />
        <h1
          className={`origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
        >
          Simulador
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((item, index) => (
          <Link 
            href={item.link} 
            target={item.target}
          >
            <li
              key={index}
              className={`
                flex gap-3 items-center cursor-pointer p-2 border border-transparent rounded-md transition ease-in-out
                hover:scale-105 hover:border-gray-300 hover:dark:border-neutral-700 
                active:scale-100
                ${item.gap ? "mt-9" : "mt-2"}
                ${!open && "px-0 justify-center"}
              `}
            >
              {item.src}
              <span className={`${!open && "hidden"} origin-left duration-300`}>{item.title}</span>
              <FaExternalLinkAlt
                size={12}
                className={`${item.target && open ? '' : 'hidden'}`}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;