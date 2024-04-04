import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "bg-accent2 w-[full]",
        "flex justify-center",
        "md:justify-end md:pl-16"
        )}
        >
      <div
        className={clsx(
          "pt-[24px]",
          "md:w-[100vw]",
        )}
      >
        <div className={clsx(
            "m-[5px]",
        )}>
          <img
            src="/PDPLogo.svg"
            width={217}
            height={41}
            alt="Footer logo"
            className={clsx(
            )}
          />

        </div>
          <p
            className={clsx(
              "mb-4",
              "text-regular font-body text-white text-center",
              "md:self-center",
            )}
          >© 2024 | PataDePerro</p>
      </div>
    </footer>
  )
}
