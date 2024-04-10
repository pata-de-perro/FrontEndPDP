"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { deleteEventByIdApi } from "@/services";
import { ModalContent } from "@/components/common";
import { EditEvent } from "@/components/events";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

export function ActionsEvent({ user, event }) {
  const { accessToken } = user;
  const router = useRouter();

  const handleDeletEvent = async () => {
    const result = await deleteEventByIdApi(event._id, accessToken);
    if (result?.success === true) {
      router.push("/pdp");
      router.refresh();
    }
  };

  const handleOpenEditModal = () => {
    document.getElementById("edit_event_modal").showModal();
  };

  const handleCloseEditModal = () => {
    document.getElementById("edit_event_modal").close();
  };

  return (
    <>
      <section className={clsx("mt-4", "relative", "flex gap-4")}>
        <button
          className={clsx(
            "btn",
            "text-accent2",
            "bg-accent1",
            "hover:bg-accent1/90"
          )}
          onClick={() => handleOpenEditModal()}
        >
          <TbEdit /> Editar evento
        </button>
        <button
          className={clsx("btn", "hover:bg-gray-100 hover:text-red-500")}
          onClick={() => handleDeletEvent()}
        >
          <AiFillDelete className={clsx("text-red-800")} /> Eliminar evento
        </button>
      </section>
      <ModalContent idModal="edit_event_modal" title="Editando el evento">
        <EditEvent
          user={user}
          event={event}
          handleCloseEditModal={handleCloseEditModal}
        />
      </ModalContent>
    </>
  );
}
