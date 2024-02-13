import clsx from "clsx";
import { MenuItems } from "./menuItems";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={clsx(
        "mx-[30px]",
        "my-[25px]",
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
            src="/DePataDePerroIcon.svg"
            width={45}
            height={45}
            alt="Icon of De Pata de Perro"
            className={clsx("cursor-pointer", "ml-[24px]", "md:sr-only")}
          />
          <Image
            src="/DePataDePerroLogo.svg"
            width={226}
            height={60}
            alt="Logo of De Pata de Perro"
            className={clsx(
              "cursor-pointer",
              "ml-[24px]",
              "sr-only",
              "md:not-sr-only",
              "md:w-[226px]",
              "md:h-[60px]"
            )}
          />
        </div>

        <div className={clsx("justify-end", "md:col-span-2")}>
          <ul
            className={clsx(
              "flex",
              "flex-wrap",
              "lg:justify-around",
              "md:justify-end",
              "items-center",
              "w-full"
            )}
          >
            <li className="sr-only lg:not-sr-only">
              <a
                className={clsx(
                  "font-body",
                  "text-accent2",
                  "text-regular",
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
                ¡Registrate!
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
                Iniciar sesión
              </button>
            </li>
            <div
              className={clsx(
                "mobileMenu",
                "justify-self-end",
                "mr-[24px]",
                "lg:sr-only",
                "md:justify-end"
              )}
            >
              <Image
                src="/mobile-menu.svg"
                width={24}
                height={24}
                alt="Mobile menu icon"
                className={clsx("cursor-pointer", "")}
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}