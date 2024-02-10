import clsx from "clsx";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={clsx(
        "sm:flex",
        "sm:my-6",
        "w-[600px]",
        // "flex ",
        // "justify-center",
        // "justify-content-center"
    )}>
        <Image 
            src="/Progresive-app-pana.svg"
            width={453}
            height={453}
            alt="progresive app pana" 
            className={clsx(
                "border-b-2",
                "md:border-b-0",
                "my-6",
                "border-r-0",
                "md:border-r-2",
                "border-azulGris50",
                "flex",
                "justify-center",
            )}
            />
            <div className={clsx(
                "text-center",
                "mx-4",
                "mb-8",
                "md:text-left",
                "md:grid",
                "md:content-end",
            )}>
                <span className={clsx(
                    "md:flex", 
                    "md:flex-wrap",
                    "md:text-left",
                    "text-center",
                )}>
                    <p className={clsx(
                        "text-h1", 
                        "font-heading",
                        "text-azulGris900",
                        )}>Bienvenido a</p>
                    <p className={clsx(
                        "text-h1",
                        "font-heading",
                        "text-primary",
                        "md:pl-2",
                        )}>PataDePerro</p>
                </span>
                <p className={clsx(
                    "text-regular",
                    "font-body",
                    "text-azulGris900",
                    "mt-8"
                    )}>Organiza tu viaje, guarda puntos de interés y comparte el itinerario con
                    todos tus compañeros de viaje.</p>

                <p className={clsx(
                    "text-primary",
                    "text-h4",
                    "font-heading",
                    "mt-8"
                    )}>Registrate</p>
                <p className={clsx(
                    "text-primary",
                    "text-regular",
                    "font-body",
                    "my-8"
                    )}> -- o --</p>
                <button
                    className={clsx(
                    "w-[250px] h-[48px]",
                    "rounded-full",
                    "bg-primary",
                    "text-regular text-white",
                    "mb-8",
                    )}
                >
                    Iniciar sesión
                </button>
            </div>
    </div>
  );
}
