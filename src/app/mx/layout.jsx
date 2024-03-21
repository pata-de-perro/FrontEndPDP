import clsx from "clsx";

import {
  AsideAuth,
  AvatarAside,
  BrandLogoAside,
  NavAside,
} from "../components/layouts";

export default function AuthLayout({ children }) {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "grid grid-cols-[auto,1fr] grid-rows-[1fr] w-1366 h-768 gap-4",
        "bg-withe"
      )}
    >
      <AsideAuth>
        {/* <BrandLogoAside /> */}
        {/* <AvatarAside /> */}
        {/* <NavAside /> */}
      </AsideAuth>
      <main className="m-2">
        <div>{children}</div>
      </main>
    </div>
  );
}
