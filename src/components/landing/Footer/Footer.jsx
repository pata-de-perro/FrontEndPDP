import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-accent2 w-[full]",
        "flex justify-center",
        "md:grid-cols-2 md:px-[24px]",
        )}
        >
      <div
        className={clsx(
          "w-[500px] pt-[24px]",
          "flex flex-wrap flex-col",
          "md:flex-no-wrap md:w-[100vw]",
          "lg:w-[1179px]",
        )}
      >
        <div className={clsx(
            "m-[5px]",
            "md:col-span-1 md:flex flex-row-reverse md:justify-between",
        )}>
          <img
            src="/PDPLogo.svg"
            width={217}
            height={41}
            alt="Footer logo"
            className={clsx(
              "grid justify-self-center",
              "md:flex md:justify-end"
            )}
          />

        </div>
        
        <div className={clsx(
            "m-[5px]",
            "md:flex flex-row-reverse",
            "md:m-[15px] md:items-center md:justify-between",
        )}>
          <p
            className={clsx(
              "mb-[25px]",
              "text-regular font-body text-white text-center",
              "md:text-start md:self-center md:mb-[0px]",
            )}
          >
            © 2024 | PataDePerro
          </p>
        </div>
      </div>
    </footer>
  );
}
