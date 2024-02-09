import clsx from "clsx";
import { MenuItems } from "./menuItems"; 
import {Link} from "next/link";
import logo from "../image/dePataDePerroLogo.svg"

export default function Navbar(){
    return(
        <header>
            <nav className={clsx(
            
            )}>
                <div className={clsx(
                    "flex flex-row",
                    "mx-[30px] my-[25px]",
                    "px-[11px] py-[11px]",
                    "bg-accent1",
                    "rounded-full",
                )}>
                    <img src="../image/dePataDePerroLogo.svg"></img>
                    <p className={clsx(
                        "font-logoFont",
                        "text-h1",
                        "text-primary"
                    )}>depatadeperro</p>

                    <div>
                        <ul className="menu-list">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                            <button className={clsx(
                                "bg-none",
                                "text-accent2 text-regular",
                                "px-5 py-2",
                                "rounded-full",
                                "hover:text-primary hover:text-regularBold",
                            )}>¡Registrate!</button>
                            <button className={clsx(
                            "bg-accent2",
                            "text-white",
                            "px-5 py-2",
                            "rounded-full",
                            "hover:bg-primary"
                        )}>Iniciar sesión</button>
                        </ul>
                    </div>
                </div>

            </nav>  
        </header>
        
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