import clsx from "clsx";
import Link from "next/link";

export default function MenuButtons() {
  return (
    <div className="md:flex md:space-x-2">
      <button
        className={clsx(
          "bg-none",
          "text-accent2 text-regular",
          "px-[8px] py-[8px]",
          "w-[138px]",
          "my-2 md:my-0",
          "rounded-full",
          "hover:text-primary",
          "border-2 border-accent2 hover:border-primary"
        )}
      >
        <Link href="/account/register">¡Regístrate!</Link>
      </button>
      <button
        className={clsx(
          "bg-accent2",
          "text-white text-regular",
          "px-[8px] py-[8px]",
          "w-[138px]",
          "rounded-full",
          "hover:bg-primary",
          "border-2 border-accent2 hover:border-primary"
        )}
      >
        <Link href="/account/login">Inicia sesión</Link>
      </button>
    </div>
  );
}
