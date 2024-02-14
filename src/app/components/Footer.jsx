import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className={clsx(
            "bg-accent2",
            "mt-[24px]",
            "flex",
            "justify-center",
        )}> 
        <div className={clsx(
            "pt-[24px]",
        )}>
            <Image 
            src="/dePataDePerroLogo.svg"
            width={217}
            height={41}
            alt=""
            className={clsx(
                "justify-center",
            )}
            />
            <div className={clsx(
                "grid",
                "grid-cols-4",
                "mt-[15px]",
            )}>
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

            <div>
                <ul className={clsx(
                    "text-regular text-white font-body text-center",
                    "grid grid-cols-3",
                    "my-[15px] pt-[15px]",
                    "border-t border-t-white",
                )}>
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
                <p className={clsx(
                    "text-regular font-body text-white text-center",
                    "mb-[25px]",
                )}>© 2024 | PataDePerro</p>
            </div>
        </div>

        </div>
    );
}