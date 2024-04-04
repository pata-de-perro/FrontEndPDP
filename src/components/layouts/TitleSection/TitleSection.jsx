import clsx from "clsx";
import Image from "next/image";

export function TitleSection({ title, urlIcon, type }) {
  return (
    <div className={clsx("mt-[16px] mr-[24px] w-[auto] flex items-center ")}>
      <div
        className={clsx(
          "w-[40px] h-[40px]",
          "rounded-full",
          type === "primary" ? "bg-primary/30" : "bg-secondary/60",
          "flex justify-center items-center",
          "border"
        )}
      >
        <Image src={urlIcon} width={24} height={24} alt="Calendar icon" />
      </div>
      <h3 className={clsx("ml-4", "font-body text-h3")}>{title}</h3>
    </div>
  );
}
