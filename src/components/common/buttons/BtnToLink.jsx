import clsx from "clsx";
import Link from "next/link";

export function BtnToLink({ name, url, type }) {
  return (
    <button
      className={clsx(
        "btn btn-wide",
        "my-4",
        type === "primary" &&
          "bg-primary text-white hover:bg-primary/90 hover:text-gray-100",
        type === "secondary" &&
          "bg-secondary text-accent2 hover:bg-secondary/90 hover:text-accent2",
        type === "accent" &&
          "bg-accent2 text-white hover:bg-accent2/90 hover:text-gray-100"
      )}
    >
      <Link href={url}>{name}</Link>
    </button>
  );
}
