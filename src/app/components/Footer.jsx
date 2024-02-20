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
        "w-[100vw]"
        )}
    >
      <div className={clsx(
        "pt-[24px]", 
        "w-[500px]",
        "flex flex-wrap flex-col",
            // "justify-center",
        )}>
        <Image
          src="/dePataDePerroLogo.svg"
          width={217}
          height={41}
          alt="Footer logo"
          className={clsx(
              "grid justify-self-center",
              // "justify-self-center",
          )
          }
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
          <Image src="./tiktok.svg" width={24} height={24} alt="Tiktok icon" />
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

        <div>
          <ul
            className={clsx(
              "text-white text-regularBold font-body",
              "text-center",
              "mt-[15px]",
              "grid grid-cols-2"
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

        <div>
          <ul
            className={clsx(
              "text-regular text-white font-body text-center",
              "grid grid-cols-3",
              "m-[15px]",
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
              "mb-[25px]"
            )}
          >
            © 2024 | PataDePerro
          </p>
        </div>
      </div>
    </footer>
  );
}
