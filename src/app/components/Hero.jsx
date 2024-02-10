import clsx from "clsx";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={clsx(
        "flex",
        "flex-wrap",
        "md:flex-nowrap",
        "justify-center",
    )}>
        <Image 
            src="/Progresive-app-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana" 
            className={clsx(
                "w-[319px]",
                "md:w-[319px]",
                "lg:w-[453px]",
                "border-b-2",
                "md:border-b-0",
                "md:mx-6",
                "md:border-r-2",
                "border-azulGris50",
                )}
                />
            <div className={clsx(
                "justify-center",
                "text-center",
                "md:text-left",
                "m-8",
                "md:m-4",
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
                    "md:text-left",
                    "font-body",
                    "text-azulGris900",
                    "my-8",
                    "my:m-0",
                    "w-[400px]",
                    "md:w-[280px]",
                    "lg:w-[360px]",
                    // "flex",
                    // "shrink",
                    )}>Organiza tu viaje, guarda puntos de interés y comparte el itinerario con
                    todos tus compañeros de viaje.</p>

                <p className={clsx(
                    "text-primary",
                    "text-h4",
                    "text-center",
                    "font-heading",
                    "mt-8",
                    "md:text-left",
                    )}>Registrate</p>
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
                    "bg-primary",
                    "text-heading text-white",
                    "mb-8",
                    "justify-center",
                    )}
                >
                    Inicia sesión
                </button>
            </div>
    </div>
  );
}
