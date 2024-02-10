import clsx from "clsx";
import { MenuItems } from "./menuItems";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={clsx(
            "mx-[30px] my-[25px]",
            "px-[11px] py-[11px]",
            "bg-accent1",
            "rounded-full",
            )}>
            <div className={clsx(
                "grid",
                "grid-flow-row-dense",
                "grid-cols-4",
                "gap-4",
                "place-content-evenly",
            )}>
                <div className={clsx(
                    "flex",
                    "w-fit",
                )}>
                    <Image
                        src="/dePataDePerroLogo-02.svg"
                        width={45}
                        height={45}
                        alt="Logo Pata de perro" 
                        className="cursor-pointer ml-[24px]"
                        />

                    <p href="#" className={clsx(
                        "font-logoFont",
                        "text-h1",
                        "text-primary",
                        "grid",
                        "content-end",
                        "cursor-pointer",
                        "stroke-white",
                        "sr-only",
                        "sm:not-sr-only",
                        "text-end",
                        // "sm:mr-10",
                    )}>depatadeperro</p>
                </div>

                <div className={clsx(
                    // "flex",
                    // "justify-end",
                    "col-span-3",
                    )}>
                    <ul className={clsx(
                        "grid",
                        "grid-cols-3",
                        "col-span-2",
                        "lg:grid-cols-6",
                        "lg:col-span-4",
                        "gap-1",
                        "justify-end",
                        "items-center",
                        "text-center",
                    )}>
                        <li className={clsx(
                            "font-body text-regular text-accent2 hover:text-primary",
                            "sr-only",
                            "lg:not-sr-only",
                            )}>
                            <a>
                                Quienes somos
                            </a>
                        </li>
                        <li className={clsx(
                            "font-body text-regular text-accent2 hover:text-primary",
                            "sr-only",
                            "lg:not-sr-only",
                        )}>
                            <a>
                                Nuestras funciones
                            </a>
                        </li>
                        <li className={clsx(
                            "font-body text-regular text-accent2 hover:text-primary",
                            "sr-only",
                            "lg:not-sr-only",
                        )}>
                            <a>
                                Opiniones
                            </a>
                        </li>
                        <li className={clsx(
                            "font-body text-regular text-accent2 hover:text-primary",
                            "sr-only",
                            "lg:not-sr-only",
                        )}>
                            <a>
                                Tutoriales
                            </a>
                        </li>
                        
                        <div className={clsx(
                            "sr-only",
                            "md:not-sr-only",
                            "flex",
                            "flex-nowrap",
                        )}>
                            <button className={clsx(
                                "bg-none",
                                "text-accent2 text-regular",
                                "px-[8px] py-[8px]",
                                "w-[138px]",
                                "mx-2",
                                "rounded-full",
                                "hover:text-primary",
                                "border-2 border-accent2 hover:border-primary",
                            )}>¡Registrate!</button>
                        </div>
                            <div className={clsx(
                                "sr-only",
                                "md:not-sr-only",
                                "flex",
                                "flex-nowrap",
                            )}>
                                <button className={clsx(
                                    "bg-accent2",
                                    "text-white text-regular",
                                    "px-[8px] py-[8px]",
                                    "w-[138px]",
                                    "rounded-full",
                                    "hover:bg-primary",
                                    "border-2 border-accent2 hover:border-primary",
                                )}>Iniciar sesión</button>
                            </div>

                            <Image
                            src="/mobile-menu.svg"
                            width={45}
                            height={45}
                            alt="Mobile Menu"
                            className={clsx(
                                "not-sr-only",
                                "lg:sr-only",
                                "cursor-pointer",
                                "flex",
                                "justify-end"
                            )}/>
                    </ul>
                </div>
                {/* aqui termina */}
            </div>

        </nav>

    );
}

// <nav className={clsx(
//     "bg-accent1",
//     // "fixed", //fixed es el que hace que el texto se pase para atrás
//     // "w-full",
//     "z-20",
//     // "top-0 start-0",
//     // "border-b"
// )}>
//     <div className={clsx(
//         "w-[92%]",
//         "flex flex-wrap",
//         "items-center justify-between",
//         "mx-auto p-4",
//         )}>
//             <a href="#" className={clsx(
//                 "flex",
//                 "items-center",
//                 "space-x-3",
//                 "rtl:space-x-reverse"
//                 )}>
//                 <img src="../image/DPDP-Logo1.svg" className={clsx(
//                     "h-8",
//                     "w-16",
//                     )} alt="DPDP-Logo1.svg"></img>
//                 <span className={clsx(
//                     "self-center",
//                     "text-h1 text-primary font-logoFont",
//                     // "stroke-[3px] stroke-white",
//                     "whitespace-nowrap"
//                     )}>de pata de perro</span>
//             </a>
//             <div className={clsx(
//                 "absoulte",
//                 "bg-black",
//                 "min-h-[60vh]",
//                 "md:min-h-fit",
//                 "left-0",
//                 "top-[9%]",
//                 "w-full",
//                 "md:items-center",
//                 "gap-2",
//                 "md:gap-[4vw]",
//                 "px-5 ",
//             )}>
//                 <ul className={clsx(
//                     "flex",
//                     // "md:flex-row",
//                     "items-center",
//                     "gap-[4vw]",
//                     "text-accent2",
//                 )}>
//                     <li>
//                         <a href="#" className={clsx(
//                             "hover:text-primary",
//                         )}>
//                             Quienes somos
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className={clsx(
//                             "hover:text-primary",
//                         )}>
//                             Nuestras funciones
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className={clsx(
//                             "hover:text-primary",
//                         )}>
//                             Opiniones
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className={clsx(
//                             "hover:text-primary",
//                         )}>
//                             Tutoriales
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className={clsx(
//                             "hover:text-primary",
//                         )}>
//                             Registrate
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <button className={clsx(
//                     "bg-accent2",
//                     "text-white",
//                     "px-5 py-2",
//                     "rounded-full",
//                     "hover:bg-primary"
//                 )}>
//                     Iniciar sesión
//                 </button>
//             </div>
//     </div>

// </nav>