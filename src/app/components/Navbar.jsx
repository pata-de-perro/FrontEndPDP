import clsx from "clsx"

export default function Navbar(){
    return(
        <div className={clsx(
            "text-azulGris500",
        )}> This is Navbar
            <p className={clsx(
                "text-h1"
            )}>Esto es un h1</p>

            <p className={clsx(
                "text-h2"
            )}>Esto es un h2</p>

            <p className={clsx(
                "text-h3"
            )}>Esto es un h3</p>

<p className={clsx(
                "text-h4"
            )}>Esto es un h4</p>
            
            <p className={clsx(
                "text-regular"
            )}>Esto es un regular</p>

<p className={clsx(
                "text-regularBold"
            )}>Esto es un regular bold</p>

<p className={clsx(
                "text-regularSemiBold"
            )}>Esto es un regularSemiBold</p>

<p className={clsx(
                "text-link"
            )}>Esto es un link</p>
        </div>
    );
}