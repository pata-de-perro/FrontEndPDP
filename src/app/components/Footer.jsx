import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-accent2",
        "mt-[24px]",
        "flex",
        "justify-center",
        "w-[100vw]",
        "md:grid-cols-2",
        "md:px-[24px]",
        )}
        >
      <div
        className={clsx(
            "m-[5px]",
            "pt-[24px]",
            "w-[500px]",
            "flex flex-wrap flex-col",
            "md:w-[100vw]",
            "lg:w-[1179px]",
            "md:flex-no-wrap"
        )}
      >
        <div className={clsx(
            "m-[5px]",
            "md:col-span-1",
            "md:flex flex-row-reverse",
            "md:justify-between",
        )}>
          <div>
          <Image
            src="/dePataDePerroLogo.svg"
            width={217}
            height={41}
            alt="Footer logo"
            className={clsx(
              "grid justify-self-center",
              "md:flex",
              "md:justify-end"
            )}
          />
          <div
            className={clsx(
              "grid",
              "grid-cols-4",
              "mt-[15px]",
              "justify-items-center"
            )}
          >
            <Image
              src="./instagram.svg"
              width={24}
              height={24}
              alt="Instagram icon"
            />
            <Image
              src="./tiktok.svg"
              width={24}
              height={24}
              alt="Tiktok icon"
            />
            <Image
              src="./youtube.svg"
              width={24}
              height={24}
              alt="Youtube icon"
            />
            <Image
              src="./twitter-x.svg"
              width={24}
              height={24}
              alt="Twitter X icon"
            />
          </div>
          </div>
        <ul
            className={clsx(
              "text-white text-regularBold font-body",
              "text-center",
              "mt-[15px]",
              "grid grid-cols-2",
              "m-[5px]",
              "md:grid-cols-1",
              "md:text-start",
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
            "md:items-center",
            "md:m-[15px]",
            "md:justify-between",
        )}>
          <ul
            className={clsx(
              "text-regular text-white font-body text-center",
              "grid grid-cols-3",
              "m-[15px]",
              "md:justify-around",
              "md:w-[300px]",
              "md:text-end",
              "md:m-[0px]"
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
              "text-regular font-body text-white text-center",
              "mb-[25px]",
              "md:text-start",
              "md:self-center",
              "md:mb-[0px]",
            )}
          >
            © 2024 | PataDePerro
          </p>
        </div>
      </div>
    </footer>
  );
}
