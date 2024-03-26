import clsx from "clsx";

export function ToastMsgTop({ message, type }) {
  return (
    <div className={clsx("toast toast-top toast-end")}>
      <div
        className={clsx(
          "toast toast-top toast-end",
          {
            "alert alert-success": type === "success",
            "alert alert-warning": type === "warning",
            "alert alert-error": type === "error",
          },
          "text-white",
          "mt-4 mr-4"
        )}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}
