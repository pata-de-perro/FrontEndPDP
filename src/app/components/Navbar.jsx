'use client'

import clsx from "clsx";
// import  MenuItems from "./menuItems";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
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
        className={clsx(
          "grid",
          "grid-cols-2",
          "items-center",
          "md:grid-cols-3"
        )}
      >
        <div className={clsx("logoContainer")}>
          <Image
            src="/DePataDePerroLogo.svg"
            width={188}
            height={50}
            alt="Logo of De Pata de Perro"
            className={clsx(
              "cursor-pointer",
              "ml-[24px]",
            )}
          />
        </div>

        <div className={clsx("justify-end", "md:col-span-2")}>
          <ul
            className={clsx(
              "flex",
              "flex-wrap",
              "lg:justify-around",
              "justify-end",
              "items-center",
            )}
          >
            <li className="sr-only lg:not-sr-only">
              <a
                className={clsx(
                  "font-body text-accent2 text-regular",
                  "hover:text-primary"
                )}
              >
                Funciones
              </a>
            </li>
            <li className="sr-only lg:not-sr-only">
              <a
                className={clsx(
                  "font-body",
                  "text-accent2",
                  "text-regular",
                  "hover:text-primary"
                )}
              >
                Opiniones
              </a>
            </li>
            <li className="sr-only lg:not-sr-only">
              <a
                className={clsx(
                  "font-body",
                  "text-accent2",
                  "text-regular",
                  "hover:text-primary"
                )}
              >
                Tutoriales
              </a>
            </li>
            <li className={clsx("sr-only", "md:not-sr-only")}>
              <button
                className={clsx(
                  "bg-none",
                  "text-accent2 text-regular",
                  "px-[8px] py-[8px]",
                  "w-[138px]",
                  "mx-2",
                  "rounded-full",
                  "hover:text-primary",
                  "border-2 border-accent2 hover:border-primary"
                )}
              >
                <Link href="/register">¡Registrate!</Link>
              </button>
              <button
                className={clsx(
                  "bg-accent2",
                  "text-white text-regular",
                  "px-[8px] py-[8px]",
                  "w-[138px]",
                  "rounded-full",
                  "hover:bg-primary",
                  "border-2 border-accent2 hover:border-primary"
                )}
              >
                <Link href="/login">Iniciar sesión</Link>
              </button>
            </li>
            <button
              onClick={()=> setIsOpen((prev) => !prev)}
              className={clsx(
                "mobileMenu",
                "justify-self-end",
                "mr-[24px]",
                "lg:sr-only",
                "md:justify-end",
                "",
              )}
            >
              {!isOpen ? (
                <Image
                src="/mobile-menu.svg"
                width={24}
                height={24}
                alt="Mobile menu icon"
                className={clsx(
                    "ml-[15px]",
                    // "stroke-accent2",
                    "hover:stroke-primary",
                    )}
              />
              ) : (
                <Image
                src="/close-icon.svg"
                width={24}
                height={24}
                alt="Close icon on mobile menu"
                className={clsx(
                    "ml-[15px]",
                    "hover:stroke-primary",
                )}
                />
              )}
            </button>
            {/* {isOpen && 
                <div className={clsx(
                    "bg-accent1",
                    "absoulte",
                    "top-20",
                )}>
                    {MenuItems.map((item, index) => (
                        <div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            } */}
          </ul>
        </div>
      </div>
    </nav>
  );
}