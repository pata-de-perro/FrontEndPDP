import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-accent2 w-[full]",
        "flex justify-center",
        "md:grid-cols-2 md:px-[24px]",
        )}
        >
      <div
        className={clsx(
          "w-[500px] pt-[24px]",
          "flex flex-wrap flex-col",
          "md:flex-no-wrap md:w-[100vw]",
          "lg:w-[1179px]",
        )}
      >
        <div className={clsx(
            "m-[5px]",
            "md:col-span-1 md:flex flex-row-reverse md:justify-between",
        )}>
          <div>
          <img
            src="/dePataDePerroLogo.svg"
            width={217}
            height={41}
            alt="Footer logo"
            className={clsx(
              "grid justify-self-center",
              "md:flex md:justify-end"
            )}
          />
          <div
            className={clsx(
              "grid grid-cols-4",
              "mt-[15px]",
              "justify-items-center"
            )}
          >
            <img
              src="./instagram.svg"
              alt="Instagram icon"
              className="cursor-pointer"
            />
            <img
              src="./tiktok.svg"
              alt="Tiktok icon"
              className="cursor-pointer"
            />
            <img
              src="./youtube.svg"
              alt="Youtube icon"
              className="cursor-pointer"
            />
            <img
              src="./twitter-x.svg"
              alt="Twitter X icon"
              className="cursor-pointer"
            />
          </div>
          </div>
        <ul
            className={clsx(
              "mt-[15px] m-[5px]",
              "grid grid-cols-2",
              "text-white text-regularBold font-body text-center",
              "md:grid-cols-1 md:text-start",
              "lg:grid-cols-4",
            )}
          >
            <li className="p-[5px]">
              <Link href="#">Inicio</Link>
            </li>
            <li className="p-[5px]">
              <Link href="#">Blog</Link>
            </li>
            <li className="p-[5px]">
              <Link href="#">Contáctanos</Link>
            </li>
            <li className="p-[5px]">
              <Link href="#">Soporte técnico</Link>
            </li>
          </ul>
        </div>
        
        <div className={clsx(
            "m-[5px]",
            "md:flex flex-row-reverse",
            "md:m-[15px] md:items-center md:justify-between",
        )}>
          <ul
            className={clsx(
              "m-[15px]",
              "grid grid-cols-3",
              "text-regular text-white font-body text-center",
              "md:justify-around md:w-[300px] md:text-end md:m-[0px]"
            )}
          >
            <li>
              <Link href="#">Terms</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Cookies</Link>
            </li>
          </ul>
          <p
            className={clsx(
              "mb-[25px]",
              "text-regular font-body text-white text-center",
              "md:text-start md:self-center md:mb-[0px]",
            )}
          >
            © 2024 | PataDePerro
          </p>
        </div>
      </div>
    </footer>
  );
}
