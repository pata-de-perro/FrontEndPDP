import clsx from "clsx";

import { AsideAuth } from "@/components/layouts";

export default function AuthLayout({ children }) {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "grid grid-cols-[auto,1fr] grid-rows-[1fr] w-1366 h-768 gap-4",
        "bg-withe"
      )}
    >
      <AsideAuth />
      <main className="m-2">{children}</main>
    </div>
  );
}
