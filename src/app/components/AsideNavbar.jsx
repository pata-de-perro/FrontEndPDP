import clsx from "clsx";
import Image from "next/image";

export default function Comments() {
  return (
    <div
      className={clsx("lg:flex", "lg:flex-row", "lg:grid ", "lg:grid-cols-12")}
    >
      <div
        className={clsx(
          "navbar ",
          "rounded-md",
          "bg-accent1",
          "mt-4",
          "mx-2",
          "lg:sr-only"
        )}
      >
        <div className="flex-1">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <p className={clsx("ml-2", "text-h3")}>PataDePerro</p>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            
           

           
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "bg-white",
          "col-span-3",
          "flex",
          "flex-col",
          "h-auto",
          "items-center",
          "sr-only", "lg:not-sr-only" 
          
        )}
      >
        <div className={clsx("flex", "justify-center", "flex-col")}>
          <div className={clsx("logoContainer", "mt-8")}>
            <Image
              src="/DePataDePerroLogo.svg"
              width={188}
              height={50}
              alt="Logo of De Pata de Perro"
            />
          </div>
          <div className={clsx("flex", "items-center", "flex-col", "mt-8", "mb-12")}>
            <div
              tabIndex={0}
              role="button"
              className={clsx("btn btn-ghost  avatar", "w-auto", "h-auto")}
            >
              <div className={clsx("w-[113px]", "rounded-full", "h-[113px]")}>
                <img
                  className={clsx("w-24")}
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <p className={clsx("text-h3")}>Nina Vidales</p>
          </div>
        </div>
        <div class={clsx(
          "w-auto",
        )}>
    <a class={clsx(
      "text-h2",
    )}>DASHBOARD</a>
  </div>
  <nav class=" p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul class="space-y-1.5">
      <li className={clsx("mb-2")}>
        <a class={clsx("flex", "items-center", "gap-x-3.5", "py-2", "px-2.5" ,"bg-gray-100", "text-sm",  "rounded-lg", "hover:bg-accent1", )}>
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
        <a class={clsx("flex", "items-center", "gap-x-3.5", "py-2", "px-2.5" ,"bg-gray-100", "text-sm",  "rounded-lg", "hover:bg-accent1", )}>
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
        <a class={clsx("flex", "items-center", "gap-x-3.5", "py-2", "px-2.5" ,"bg-gray-100", "text-sm",  "rounded-lg", "hover:bg-accent1", )}>
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
        <a class={clsx("flex", "items-center", "gap-x-3.5", "py-2", "px-2.5" ,"bg-gray-100", "text-sm",  "rounded-lg", "hover:bg-accent1", )}>
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
        <a class={clsx("flex", "items-center", "gap-x-3.5", "py-2", "px-2.5" ,"bg-gray-100", "text-sm",  "rounded-lg", "hover:bg-accent1", )}>
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
      </div>
     
    </div>
  );
}
