import clsx from "clsx"

export default function Navbar(){
    return(
        <div className={clsx(
            "text-azulGris500",
        )}> This is Navbar
            <p className={clsx(
                "text-h1"
            )}>Esto es un h1</p>
        </div>
    );
}