import clsx from "clsx";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

export function ActionsEvent() {
  return (
    <section className={clsx("mt-4", "relative", "flex gap-4")}>
      <button
        className={clsx(
          "btn",
          "text-accent2",
          "bg-accent1",
          "hover:bg-accent1/90"
        )}
      >
        <TbEdit /> Editar evento
      </button>
      <button className={clsx("btn", "hover:bg-gray-100 hover:text-red-500")}>
        <AiFillDelete className={clsx("text-red-800")} /> Eliminar evento
      </button>
    </section>
  );
}
