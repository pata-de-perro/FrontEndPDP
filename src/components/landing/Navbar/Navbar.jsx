"use client";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import clsx from "clsx";
import { MenuButtons } from "@/components/landing";
import { IoMenuSharp, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuItems = [
    {
      title: "Funciones",
      to: "functions",
    },
    {
      title: "Opiniones",
      to: "comments",
    },
    {
      title: "Tutoriales",
      to: "tutorials",
    },
  ];

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
                    className="nav-links font-body text-regular text-accent2 hover:text-primary hover:text-regularSemiBold cursor-pointer"
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
                  <div className="text-h2 text-accent2"><IoMenuSharp /></div>
                ) : (
                  <div className="text-h2 text-accent2"><IoClose /></div>
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
