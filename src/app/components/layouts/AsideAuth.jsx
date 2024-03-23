"use client"

import clsx from "clsx";
import React, {useState} from "react";
import Link from "next/link";
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiTwotoneCalendar,
  AiOutlinePlaySquare, 
  AiOutlineArrowRight} from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";

export function AsideAuth() {
  const navigationItems = [
    {icon: <AiOutlineHome />, label:"Inicio", href:"/mx" },
    {icon: <AiOutlineUser />, label:"Tu perfil", href:"/mx/profile" },
    {icon: <AiTwotoneCalendar />, label:"Tus eventos", href:"/mx" },
    {icon: <AiOutlinePlaySquare />, label:"Tutoriales", href:"/mx/tutorials" },
  ]

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className={`${!nav ? 'w-[230px]' : 'w-20'} h-screen p-4 border-r relative duration-300`}>
      <div className={`text-white br-gray-300 bg-primary w-10 h-10 flex items-center justify-center text-xl rounded-full absolute top-4 right-[-18px] ${nav ? 'rotate-0' : 'rotate-180'}`}
      onClick={handleNav}>
        <AiOutlineArrowRight />
      </div>
      <div className="flex items-center p-2">
        <img
        src="/DePataDePerroIcon.svg"
        className="w-[30px] h-auto"/>
        <img
        src="/dePataDePerroLogoLETERS.svg"
        className={`${nav ? 'hidden' : 'flex'} w-auto h-[45px]`}/>
      </div>
      <div className="mt-6">
        <ul className={clsx(
          "flex flex-col gap-8 p-2",
          "gap-8 p-2"
        )}>
          {navigationItems.map((item, index) => (
            <li key={index} className={clsx(
              "flex gap-4 items-center",
              "p-2 rounded-md",
              "font-body",
              "text-md",
              "hover:bg-secondaryOpacity",
            )}>
              <Link href={item.href} className="flex items-center">
              {item.icon}
              <span className={`${nav ? 'hidden' : 'flex'}  ml-2`}>{item.label}</span>
              </Link>
            </li>
          ))}
          <div className="fixed bottom-0">
            <ul className={clsx(
            "flex flex-col gap-8 p-2",
            "gap-8 p-2"
            )}>
              <li className={clsx(
              "flex gap-4 items-center",
              "p-2 mb-4 rounded-md",
              "font-body",
              "text-md",
              "hover:text-primary",
            )}>
              <a className="flex items-center cursor-pointer" onClick={() => signOut()}>
                <LuLogOut className="text-md mr-2" />
                <span className={`${nav ? 'hidden' : 'flex'}  ml-2`}>Cerrar sesión</span>
              </a>
            </li>
            </ul>
          </div>

        </ul>
      </div>
    </div>
  );
}

