'use client'

import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { FaCalculator, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "@/public/images/logo-transparente-white.png";
import Image from "next/image";

const sizeIcon = 24;

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Calculadora", src: <FaCalculator size={sizeIcon} /> },
    { title: "Github", src: <FaGithub size={sizeIcon} />, gap: true },
    { title: "LinkedIn", src: <FaLinkedin size={sizeIcon} /> },
  ]

  return (
    <div
      className={`
        duration-300 h-screen p-5 pt-8 ease-in-out relative bg-gradient-to-r from-blue-600 to-violet-600
        ${open ? 'w-52' : 'w-20'} 
      `}
    >
      <SlArrowLeft
        size={32}
        color=""
        className={`
          absolute cursor-pointer -right-4 top-9 w-22 p-2 rounded-full duration-150 ease-in-out bg-gradient-to-r from-blue-600 to-violet-600
          ${!open && 'rotate-180'}
        `}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <Image
          alt="Logotipo"
          src={Logo}
          height={35}
          className="cursor-pointer duration-500"
        />
        <h1
          className={`origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
        >
          Simulador
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((item, index) => (
          <li 
            key={index}
            className={`
              flex items-center cursor-pointer gap-x-4 p-2 hover:bg-light-white rounded-md
              ${item.gap ? "mt-9" : "mt-2"}
            `}
          >
            {item.src}
            <span className={`${!open && "hidden"} origin-left duration-300`}>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;