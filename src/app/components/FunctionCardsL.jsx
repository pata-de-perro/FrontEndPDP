import clsx from "clsx";

export function FunctionCardsL({title, description, urlImg}){
    return(
        <div
        className={clsx(
          "w-[358px] h-[425px]",
          "p-[20px] m-[24px]",
          "shadow-xl",
          "rounded-xl",
          "flex flex-wrap",
          "justify-center",
          "lg:h-[200px] lg:items-center lg:justify-center lg:justify-self-end lg:self-center",
        )}
      >
        <img
          src={urlImg}
          width={453}
          height={453}
          alt="progresive app pana"
          className={clsx(
              "w-[260px]", 
              "lg:sr-only",
              )}
        />
        <p
          className={clsx(
            "font-heading text-accent2 text-h3 text-center",
            "mb-[10px] mx-8"
          )}
        >
          {title}
        </p>
        <p
          className={clsx(
            "font-body",
            "text-regular",
            "text-azulGris900",
            "text-center",
            "mx-4"
          )}
        >
          {description}
        </p>
      </div>
    )
}