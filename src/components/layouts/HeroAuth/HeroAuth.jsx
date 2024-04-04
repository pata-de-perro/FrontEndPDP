import clsx from "clsx";

export function HeroAuth({ title, children, urlImg, type }) {
  return (
    <div
      className={clsx(
        type === "primary"
          ? "bg-gradient-to-r from-[#F5F5F5] to-primary"
          : "bg-gradient-to-r from-[#F5F5F5] to-secondary",
        "rounded-2xl",
        "mr-[24px] mt-[35px] p-[24px]",
        "w-[auto] h-[auto]"
      )}
    >
      <div className={clsx("flex", "relative")}>
        <div className="w-[500px]">
          <h1 className={clsx("font-heading text-azulGris900 text-h1", "mb-2")}>
            {title}
          </h1>
          <div
            className={clsx(
              "font-body text-azulGris900 text-regular",
              "mb-8",
              "md:w-[400px] md:mb-0",
              "w-auto"
            )}
          >
            {children}
          </div>
        </div>
        {urlImg && (
          <img
            src={urlImg}
            width={330}
            height={330}
            alt="progresive app pana"
            className={clsx(
              "sr-only",
              "md:absolute md:-right-8 md:top-5",
              "md:not-sr-only md:w-[225px] md:h-[225px] ",
              "lg:w-[330px] lg:h-[330px] lg:-top-16"
            )}
          />
        )}
      </div>
    </div>
  );
}
