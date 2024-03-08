import Image from "next/image";
import clsx from "clsx";

export function NavAside() {
  return (
    <nav
      class=" p-6 w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open
    >
      <ul class="space-y-1.5">
        <li className={clsx("mb-2")}>
          <a
            class={clsx(
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
              src="/House-icon.svg"
              width={24}
              height={24}
              alt="Mobile menu icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Inicio
          </a>
        </li>
        <li className={clsx("mb-2")}>
          <a
            class={clsx(
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
              src="/Car-icon.svg"
              width={24}
              height={24}
              alt="Car aside icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Tus viajes
          </a>
        </li>
        <li className={clsx("mb-2")}>
          <a
            class={clsx(
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
              src="/Fork-icon.svg"
              width={24}
              height={24}
              alt="Fork aside icon"
              className={clsx("ml-[15px]", "hover:stroke-primary")}
            />
            Tus salidas
          </a>
        </li>
        <li className={clsx("mb-2")}>
          <a
            class={clsx(
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
            class={clsx(
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
      </ul>
    </nav>
  );
}
