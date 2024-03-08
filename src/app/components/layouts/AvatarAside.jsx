import clsx from "clsx";

export function AvatarAside() {
  return (
    <section>
      <div className={clsx("avatar placeholder", "py-4")}>
        <div
          className={clsx(
            "text-neutral-content rounded-full w-24",
            "bg-gradient-to-tr from-secondary to-accent1"
          )}
        >
          <span className="text-3xl">NV</span>
        </div>
      </div>
      <p className="text-bold">Nina Vidales</p>
    </section>
  );
}
