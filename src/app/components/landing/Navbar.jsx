"use client";

import clsx from "clsx";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useState } from "react";
import MenuButtons from "@/app/components/landing/menuButtons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItems=[
    {
        title: "Funciones",
        to:"tutorials",
    },
    {
        title: "Opiniones",
        to:"comments",
    },
    {
        title: "Tutoriales",
        to:"tutorials",
    },
]


  return (
    <nav
      className={clsx(
        "mx-[30px] my-[25px]",
        "p-[11px]",
        "bg-accent1",
        "rounded-full"
      )}
    >
      <div
        className={clsx("grid grid-cols-2", "items-center", "md:grid-cols-3")}
      >
        <div className={clsx("logoContainer")}>
          <img
            src="/PDPLogo.svg"
            alt="Logo of De Pata de Perro"
            className={clsx("ml-[24px] w-[188px] h-[50px]")}
          />
        </div>

        <div className={clsx("justify-end", "md:col-span-2")}>
          <ul
            className={clsx(
              "flex flex-wrap",
              "justify-end items-center",
              "lg:justify-around"
            )}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className="sr-only lg:not-sr-only">
                  <Link
                    className="nav-links text-regular text-accent2 hover:text-primary cursor-pointer"
                    to={item.to}
                    href={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li className={clsx("sr-only", "md:not-sr-only")}>
              <MenuButtons />
            </li>
            <details className="dropdown dropdown-end lg:sr-only">
              <summary
                onClick={() => setIsOpen((prev) => !prev)}
                className="m-1 btn border-0 bg-transparent shadow-none mobileMenu justify-self-end mr-[24px] lg:sr-only md:justify-end hover:bg-accent1"
              >
                {!isOpen ? (
                  <img
                    src="/mobile-menu.svg"
                    width={24}
                    height={24}
                    alt="Mobile menu icon"
                    className={clsx("ml-[15px]", "hover:stroke-primary")}
                  />
                ) : (
                  <img
                    src="/close-icon.svg"
                    width={24}
                    height={24}
                    alt="Close icon on mobile menu"
                    className={clsx("ml-[15px]", "hover:stroke-primary")}
                  />
                )}
              </summary>
              <ul className="p-2 menu dropdown-content z-[1] bg-accent1 rounded-box w-52">
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="nav-links text-regular text-accent2 hover:text-primary"
                        to={item.to}
                        href={item.href}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                <div className="md:sr-only">
                  <MenuButtons />
                </div>
              </ul>
            </details>
          </ul>
        </div>
      </div>
    </nav>
  );
}
