import clsx from "clsx";
import Image from "next/image";

export default function Tutorials() {
  return (
    <div
      className={clsx(
        "max-w-lg",
        "w-auto",
        "full-size",
        "flex",
        "items-center",
        "justify-center",
        "flex-col"
      )}
    >
      <div className={clsx("flex", "items-center", "justify-center")}>
        <p className={clsx("text-h3", "text-accent2", "drop-shadow-xl")}>Cómo funciona</p>
      </div>
      <div
        className={clsx("flex", "items-center", "justify-center", "flex-col")}
      >
        <Image
          className={clsx("mt-7")}
          src="/Video-cover.svg"
          width={400}
          height={100}
          alt="Vertical road pic"
        ></Image>
        <Image
          className={clsx("mt-7")}
          src="/Hand.svg"
          width={500}
          height={100}
          alt="Vertical road pic"
        ></Image>
        <div
          className={clsx(
            "my-8",
            "flex",
            "items-center",
            "justify-center",
            "flex-col"
          )}
        >
          <div className={clsx("flex", "items-center", "justify-center", "flex-col")}>
            <p className={clsx("text-accent2", "text-h3", "deop-shadow-2xl")}>
              Agregando experiencias
            </p>
            <Image
          className={clsx("mt-4")}
          src="/Video-cover2.svg"
          width={500}
          height={100}
          alt="Vertical road pic"
        ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
