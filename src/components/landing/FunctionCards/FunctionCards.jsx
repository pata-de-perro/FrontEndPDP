import clsx from "clsx";

export function FunctionCards({title, description, urlImg}){
    return(
        <div
        className={clsx(
          "w-[358px] h-[425px]",
          "m-4",
          "shadow-xl rounded-xl",
          "flex flex-col justify-center items-center",
          "lg:h-[200px] ",
        )}
      >
        <img
          src={urlImg}
          alt="progresive app pana"
          className="w-[260px] h-[260px] lg:sr-only" 
          />
        <h3
          className={clsx(
            "font-heading text-accent2 text-h3 text-center",
            "mb-[10px]",
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "font-body text-regular text-azulGris900 text-center",
            "mx-4"
          )}
        >
          {description}
        </p>
      </div>
    )
}