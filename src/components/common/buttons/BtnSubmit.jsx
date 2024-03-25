import clsx from "clsx";

export function BtnSubmit({ title, loading }) {
  return (
    <button
      className={clsx(
        "btn",
        "my-4",
        "bg-primary text-white",
        "hover:bg-accent1 hover:text-accent2"
      )}
    >
      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        title
      )}
    </button>
  );
}
