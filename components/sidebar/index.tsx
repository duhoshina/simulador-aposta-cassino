'use client'

import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import { FaCalculator, FaCode, FaGithub, FaInfo, FaLinkedin } from "react-icons/fa";
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
      link: '/',
    },
    {
      title: "Algoritmo",
      src: <FaCode size={sizeIcon} />, 
      link: '/', 
    },
    { 
      title: "Projeto", 
      src: <FaInfo size={sizeIcon} />, 
      link: '/',
    },
    { 
      title: "Github", 
      src: <FaGithub size={sizeIcon} />, 
      link: 'https://github.com/duhoshina/simulador-aposta-cassino', 
      target: "_blank", 
      gap: true,
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
        duration-300 h-screen p-2 pt-8 ease-in-out relative bg-transparent border-r border-gray-700
        ${open ? 'w-52' : 'w-16'} 
      `}
    >
      <SlArrowLeft
        size={32}
        color="slate"
        className={`
          absolute cursor-pointer -right-4 top-9 w-22 p-2 rounded-full duration-150 ease-in-out bg-slate-800
          ${!open && 'rotate-180'}
        `}
        onClick={() => setOpen(!open)}
      />
      <div 
        className={`
          flex gap-2 p-2 items-center
        `}
      >
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
                flex gap-2 items-center cursor-pointer p-2 border border-transparent rounded-md transition ease-in-out
                hover:border-gray-300 hover:dark:border-neutral-700
                active:scale-95
                ${item.gap ? "mt-9" : "mt-2"}
                ${!open && "px-0 justify-center"}
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