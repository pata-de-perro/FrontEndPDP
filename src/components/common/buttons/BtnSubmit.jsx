import clsx from "clsx";

export function BtnSubmit({ title, loading, ref }) {
  return (
    <button
      className={clsx(
        "btn",
        "my-4 w-[350px]",
        "md:w-[410px]",
        "bg-primary text-white",
        "hover:bg-accent1 hover:text-accent2"
      )}
      ref={ref}
    >
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        title
      )}
    </button>
  );
}
