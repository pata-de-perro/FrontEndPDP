import clsx from "clsx";

export function BtnPrimary({ title, onClick }) {
  return (
    <button
      className={clsx(
        "w-[224px] h-[45px]",
        "rounded-2xl",
        "mt-8",
        "bg-primary",
        "font-body text-regular text-white",
        "justify-center",
        "absolute right-4 -bottom-10",
        "md:static"
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
