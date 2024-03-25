"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import clsx from "clsx";
import { navigationItems } from "@/mocks/catalogs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

export function AsideAuth() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        !nav ? "w-[230px]" : "w-20"
      } h-screen p-4 border-r relative duration-300 sticky top-0`}
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
          className={`${nav ? "hidden" : "flex"} w-auto h-[45px]`}
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
                "text-md",
                "hover:bg-secondaryOpacity"
              )}
            >
              <Link href={item.href} className="flex items-center">
                {item.icon}
                <span className={`${nav ? "hidden" : "flex"}  ml-2`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <div
            className={clsx(
              "flex gap-4 items-center",
              "p-2 mb-4 rounded-md",
              "font-body",
              "text-md",
              "fixed bottom-0",
              "hover:text-primary"
            )}
          >
            <a
              className="flex items-center cursor-pointer"
              onClick={() => signOut()}
            >
              <LuLogOut className="text-md mr-2" />
              <span className={`${nav ? "hidden" : "flex"}  ml-2`}>
                Cerrar sesión
              </span>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}