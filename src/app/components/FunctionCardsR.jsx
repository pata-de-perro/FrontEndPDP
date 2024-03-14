import clsx from "clsx"

export function FunctionCardsR({ title, description, urlImg }){
    return(
        <div
          className={clsx(
            "w-[358px] h-[425px]",
            "shadow-xl",
            "p-[20px]",
            "m-[24px]",
            "rounded-xl",
            "flex",
            "flex-wrap",
            "justify-center",
            "lg:h-[200px]",
            "lg:items-center",
            "lg:justify-center",
            "lg:justify-self-start",
            "lg:self-center",
          )}
        >
          <img
            src={urlImg}
            width={453}
            height={453}
            alt="progresive app pana"
            className={clsx("w-[260px]", "lg:sr-only",)}
          />
          <p
            className={clsx(
              "font-heading",
              "text-greentext",
              "text-h3",
              "text-center",
              "lg:justify-items-center",
              "mb-[10px]",
              "lg:mb-[-40px]"
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
              "mx-[20px]"
            )}
          >
            {description}
          </p>
        </div>
    )
}