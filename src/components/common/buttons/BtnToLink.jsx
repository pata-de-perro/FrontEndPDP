import clsx from "clsx";
import Link from "next/link";

export function BtnToLink({ name, url }) {
  return (
    <button
      className={clsx(
        "btn btn-wide rounded-2xl",
        "mt-5",
        "bg-primary",
        "text-white font-medium",
        "hover:bg-primary/90 hover:text-gray-100"
      )}
    >
      <Link href={url}>{name}</Link>
    </button>
  );
}
