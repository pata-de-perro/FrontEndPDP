import clsx from "clsx"

export default function Card(){
    return(
        <div className={clsx(
            "border-rose-500",
            "shadow-lg shadow-yellow-500/50",
            "hover:border-2", 
            "py-2 px-5",
            "w-full",
            "rounded-md",
        )}>
            <p>Estos son los textos</p>
            <p className={clsx(
                "text-primary",
                "font-heading",
                "font-bold",
                "text-3xl",
                 "bg-clip-text",
            )}>Este es un texto H1</p>
            <p className={clsx(
                "text-2xl",
                "font-regular",
                "font-heading",
                "text-primary",
                )}>Este es un texto H2</p>
            <p className={clsx(
                "font-heading",
                "text-sm",
                "font-bold",
                "text-secondary",
            )}>Este es un texto H3</p>
            <p className={clsx(
                "font-heading",
                "text-sm",
                "font-semibold",
                "text-accent1",
            )}>Este es un texto H4</p>
            <p className="font-body text-accent2">Este es un texto regular</p>
            <p className="font-body font-semibold text-appBackground">Este es un texto negritas</p>
            <p className="font-body font-thin text-azulGris50">Este es un texto de enlace</p>
            <p className="font-body text-azulGris100">Este es un texto regular</p>
            <p className="font-body text-azulGris200">Este es un texto regular</p>
            <p className="font-body text-azulGris300">Este es un texto regular</p>
            <p className="font-body text-azulGris400">Este es un texto regular</p>
            <p className="font-body text-azulGris500">Este es un texto regular</p>
            <p className="font-body text-azulGris600">Este es un texto regular</p>
            <p className="font-body text-azulGris700">Este es un texto regular</p>
            <p className="font-body text-azulGris800">Este es un texto regular</p>
            <p className="font-body text-azulGris900">Este es un texto regular</p>

        </div>
    );
}