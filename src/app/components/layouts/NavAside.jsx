"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";
import clsx from "clsx";

export function NavAside() {
  return (
    <nav
      className="p-6 w-full flex flex-col flex-wrap h-full"
      data-hs-accordion-always-open
    >
      <ul className="space-y-1.5">
        <li className={clsx("mb-2")}>
          <Link
            className={clsx(
              "flex items-center",
              "gap-x-3.5",
              "py-2 px-2.5",
              "bg-gray-100",
              "text-sm",
              "rounded-lg",
              "hover:bg-accent1"
            )}
            href="/mx"
          >
            <Image
              src="/House-icon.svg"
              width={24}
              height={24}
              alt="Mobile menu icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Inicio
          </Link>
        </li>
        <li className={clsx("mb-2")}>
          <Link
            className={clsx(
              "flex items-center",
              "gap-x-3.5",
              "py-2 px-2.5",
              "bg-gray-100",
              "text-sm",
              "rounded-lg",
              "hover:bg-accent1"
            )}
            href="/mx/profile"
          >
            <Image
              src="/person_icon.svg"
              width={24}
              height={24}
              alt="Person aside icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Tu perfil
          </Link>
        </li>
        <li className={clsx("mb-2")}>
          <a
            className={clsx(
              "flex",
              "items-center",
              "gap-x-3.5",
              "py-2 px-2.5",
              "bg-gray-100",
              "text-sm",
              "rounded-lg",
              "hover:bg-accent1"
            )}
          >
            <Image
              src="/Calender-icon.svg"
              width={24}
              height={24}
              alt="Calender aside icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Tus eventos
          </a>
        </li>
        <li className={clsx("mb-2")}>
          <a
            className={clsx(
              "flex",
              "items-center",
              "gap-x-3.5",
              "py-2",
              "px-2.5",
              "bg-gray-100",
              "text-sm",
              "rounded-lg",
              "hover:bg-accent1"
            )}
          >
            <Image
              src="/Tutorials-icon.svg"
              width={24}
              height={24}
              alt="Tutorials aside icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Tutorials
          </a>
        </li>
        <li className={clsx("mb-2")}>
          <a
            className={clsx(
              "flex",
              "items-center",
              "gap-x-3.5",
              "py-2",
              "px-2.5",
              "bg-gray-100",
              "text-sm",
              "rounded-lg",
              "hover:bg-accent1"
            )}
            onClick={() => signOut()}
          >
            <Image
              src="/Log-out-icon.svg"
              width={24}
              height={24}
              alt="Logout aside icon"
              className={clsx(
                "ml-[15px]",
                "flex items-baseline",
                "hover:stroke-primary cursor-pointer"
              )}
            />
            Cerrar sesión
          </a>
        </li>
      </ul>
    </nav>
  );
}
