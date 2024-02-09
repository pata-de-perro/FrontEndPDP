import clsx from "clsx";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className={clsx(
            'bg-accent1'
            )}>
            <div className={clsx(
                "max-w-lg",
                "rounded-e-full",
                "w-25"
            )}>
                <div className={clsx(
                    "flex h-14  m-8 items-center justify-between",
                    
                )}>
                    <p className={clsx(
                        "text-h1 font-body",
                    )}>Hola mundo</p>

                </div>

            </div>
        </nav>

    );
}