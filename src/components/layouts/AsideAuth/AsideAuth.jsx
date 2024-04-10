"use client";
import clsx from "clsx";
import Link from "next/link";
// import { useState } from "react";
import { signOut } from "next-auth/react";
import { navigationItems } from "@/mocks/catalogs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuLogOut, LuMenu } from "react-icons/lu";
import { FaPenClip } from "react-icons/fa6";

import { Disclosure } from "@headlessui/react";
import React from "react";

export function AsideAuth() {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className={clsx(
          "absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2",
          "text-white bg-primary hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group lg:sr-only",
        )}>
          <img src="/PDPLogo.svg" className="w-auto h-[30px]" />
          <LuMenu 
            className="block h-6 w-6 "
            aria-hidden="true"
          />
        </Disclosure.Button>
          <div className={clsx(
            "p-6 w-1/2 md:w-1/3  lg:w-1-4 h-screen bg-white z-20 fixed top-0 -left-96 ",
            "lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200"
          )}>
            <div className="flex flex-col justify-start items-center">
              <img src="/PDPLogo.svg" className="h-[45px]"/>
              <ul className={clsx("flex flex-col gap-8 p-2", "gap-8 p-2")}>
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "flex gap-4 items-center",
                "p-2 rounded-md",
                "font-body",
                "text-regular",
                "hover:bg-secondaryOpacity"
              )}
            >
              <Link href={item.href} className="flex items-center">
                {item.icon}
                <span className="flex ml-2">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <div className={clsx(
            "flex flex-wrap items-center bg-primary rounded-md",
            "h-[40px]",
            "text-white hover:bg-primary/75"
          )}>
            <Link href="/pdp/events/create" className="flex ">
              <span> <FaPenClip className="text-md mr-2 ml-2"/></span>
              <span className="flex mr-2 pr-2 text-regular font-body">Planear evento</span>
            </Link>
          </div>
          <div
            className={clsx(
              "flex gap-4 items-center",
              "p-2 mb-4 rounded-md",
              "font-body",
              "text-md",
              "absolute bottom-0",
              "hover:text-primary"
            )}
          >
            <a
              className="flex items-center cursor-pointer"
              onClick={() => signOut()}
            >
              <LuLogOut className="flex items-center"/>
              <span className="flex ml-2 text-regular font-body">
                Cerrar sesión
              </span>
            </a>
          </div>
        </ul>
            </div>
          </div>

      </Disclosure>
    </div>
  );
}


{/* <div
      className={`${
        !nav ? "w-[230px]" : "w-0 md:w-20 lg:w-20"
      } h-screen sticky top-0 p-4 border-r relative duration-300 peer-focus:left-0 `}
    >
      <div
        className={`text-white br-gray-300 bg-primary w-10 h-10 flex items-center justify-center text-xl rounded-full absolute top-4 right-[-18px] cursor-pointer ${
          nav ? "rotate-0" : "rotate-180"
        }`}
        onClick={handleNav}
      >
        <AiOutlineArrowRight />
      </div>

      <div className="flex items-center p-2">
        <img src="/DePataDePerroIcon.svg" className="w-[30px] h-auto" />
        <img
          src="/dePataDePerroLogoLETERS.svg"
          className={`${nav ? "hidden" : "md:flex"} w-auto h-[45px]`}
        />
      </div>
      <div className="mt-6">
        <ul className={clsx("flex flex-col gap-8 p-2", "gap-8 p-2")}>
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={clsx(
                "flex gap-4 items-center",
                "p-2 rounded-md",
                "font-body",
                "text-regular",
                "hover:bg-secondaryOpacity"
              )}
            >
              <Link href={item.href} className={`${ nav ? "hidden md:flex md:items-center" : "flex items-center"}`}>
                {item.icon}
                <span className={`${nav ? "hidden" : "flex"}  ml-2`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <div className={clsx(
            "flex flex-wrap items-center bg-primary rounded-md",
            "h-[40px]",
            "text-white hover:bg-primary/75"
          )}>
            <Link href="/pdp/events/create" className="flex ">
              <span> <FaPenClip className="text-md mr-2 ml-2"/></span>
              <span className={`${ nav ? "hidden" : "flex"} 
              mr-2 pr-2 text-regular font-body`}>Planear evento</span>
            </Link>
          </div>
          <div
            className={clsx(
              "flex gap-4 items-center",
              "p-2 mb-4 rounded-md",
              "font-body",
              "text-md",
              "absolute bottom-0",
              "hover:text-primary"
            )}
          >
            <a
              className="flex items-center cursor-pointer"
              onClick={() => signOut()}
            >
              <LuLogOut className={`${ nav ? "hidden md:flex md:items-center" : "flex items-center"}`} />
              <span
                className={`${
                  nav ? "hidden" : "flex"
                }  ml-2 text-regular font-body`}
              >
                Cerrar sesión
              </span>
            </a>
          </div>
        </ul>
      </div>
    </div> */}