import clsx from "clsx";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={clsx(
        "flex flex-wrap",
        "justify-center",
        "md:flex-nowrap",
    )}>
        <img 
            src="/Progresive-app-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana" 
            className={clsx(
                "w-[319px]",
                "border-azulGris50",
                "md:w-[319px] md:border-b-0 md:mx-6 md:border-r",
                "lg:w-[453px]",
                )}
                />
            <div className={clsx(
                "justify-center",
                "text-center",
                "m-8",
                "md:text-left md:m-4",
            )}>
                <span className={clsx(
                    "lg:flex", 
                    "lg:flex-wrap",
                    "lg:items-end",
                )}>
                    <p className={clsx(
                        "text-h1", 
                        "font-heading",
                        "text-azulGris900",
                        "mt-3",
                        )}>Bienvenido a</p>
                    <p className={clsx(
                        "text-h1",
                        "font-heading",
                        "text-primary",
                        "lg:pl-2",
                        )}>PataDePerro</p>
                </span>
                <p className={clsx(
                    "text-regular",
                    "text-center",
                    "font-body",
                    "text-azulGris900",
                    "my-8",
                    "w-[400px]",
                    "md:w-[280px] md:text-left md:my-0",
                    "lg:w-[360px]",
                    )}>Organiza tu viaje, guarda puntos de interés y comparte el itinerario con
                    todos tus compañeros de viaje.</p>

                    <Link className={clsx(
                    "text-primary",
                    "text-h4",
                    "text-center",
                    "font-heading",
                    "mt-8",
                    "md:text-left",
                    )}
                    href="/register">Regístrate</Link>
                <p className={clsx(
                    "text-primary",
                    "text-regular",
                    "text-center",
                    "font-body",
                    "md:text-left",
                    "my-8"
                    )}> -- o --</p>
                <button
                    className={clsx(
                    "w-[250px] h-[48px]",
                    "rounded-full",
                    "mb-8",
                    "bg-primary",
                    "text-heading text-white",
                    "justify-center",
                    )}
                >
                    <Link href="/login">Iniciar sesión</Link>
                </button>
            </div>
    </div>
  );
}
