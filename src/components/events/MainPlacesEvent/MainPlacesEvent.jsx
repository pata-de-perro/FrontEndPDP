import clsx from "clsx";

export function MainPlacesEvent({ event, mapId }) {
  return (
    <main className={clsx("h-[600px]", "flex flex-col gap-4", "mt-4")}>
      <section className={clsx("h-full", "flex justify-between gap-4")}>
        <aside
          className={clsx("bg-primary/10", "w-1/4", "rounded-xl", "p-2")}
        ></aside>
        <section className={clsx("w-3/4")}></section>
      </section>
      <section className={clsx("h-5", "bg-secondary", "rounded-xl")}></section>
    </main>
  );
}
