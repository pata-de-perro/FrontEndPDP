import clsx from "clsx";
import { TitleSection } from "@/components/layouts";
import { MainPlacesEvent } from "@/components/events";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const MAP_ID = process.env.ID_MAP_GOOGLE;

export function ContainerEvent({ event }) {
  return (
    <div className={clsx("mr-6")}>
      <div className={clsx("flex items-center justify-between")}>
        <TitleSection
          title="Revisa tu mapa"
          urlIcon="/location_on.svg"
          type="primary"
        />
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
          <button
            className={clsx("btn", "hover:bg-gray-100 hover:text-red-500")}
          >
            <AiFillDelete className={clsx("text-red-800")} /> Eliminar evento
          </button>
        </section>
      </div>
      <MainPlacesEvent event={event} mapId={MAP_ID} />
    </div>
  );
}
