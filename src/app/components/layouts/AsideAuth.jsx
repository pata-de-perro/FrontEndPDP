import clsx from "clsx";

export function AsideAuth({ children }) {
  return (
    <aside
      className={clsx("my-2", "border-r", "flex flex-col items-center gap-4")}
    >
      {children}
    </aside>
  );
}
