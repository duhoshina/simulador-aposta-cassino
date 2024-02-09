'use client'

import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { FaCalculator, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "@/public/images/logo-transparente-white.png";
import Image from "next/image";
import Link from "next/link";

const sizeIcon = 20;

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { 
      title: "Simulador", 
      src: <FaCalculator size={sizeIcon} />, 
      link: '/' },
    { 
      title: "Github", 
      src: <FaGithub size={sizeIcon} />, 
      link: 'https://github.com/duhoshina/simulador-aposta-cassino', 
      target: "_blank", 
      gap: true 
    },
    { 
      title: "LinkedIn", 
      src: <FaLinkedin size={sizeIcon} />, 
      link: 'https://www.linkedin.com/in/luishoshina/',
      target: "_blank", 
    },
  ]

  return (
    <div
      className={`
        duration-300 h-screen p-5 pt-8 ease-in-out relative bg-transparent border-r border-gray-700
        ${open ? 'w-64' : 'w-24'} 
      `}
    >
      <SlArrowLeft
        size={32}
        color="black"
        className={`
          absolute cursor-pointer -right-4 top-9 w-22 p-2 rounded-full duration-150 ease-in-out bg-white
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
          <Link 
            href={item.link} 
            target={item.target}
          >
            <li
              key={index}
              className={`
                flex items-center cursor-pointer gap-x-4 p-2 border border-transparent rounded-md transition ease-in-out
                hover:border-gray-300 hover:bg-light-white hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                active:scale-95
                ${item.gap ? "mt-9" : "mt-2"}
              `}
            >
              {item.src}
              <span className={`${!open && "hidden"} origin-left duration-300`}>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;