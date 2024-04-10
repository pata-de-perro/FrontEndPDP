"use client";
import clsx from "clsx";
import Swal from "sweetalert2";
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
    const res = await Swal.fire({
      title: "¿Estás seguro de eliminar el evento?",
      text: "¡No podrás revertirlo!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Si, ¡Eliminarlo!",
      customClass: {
        title: "text-2xl text-accent2 font-heading",
      },
    });
    if (res.isConfirmed) {
      const result = await deleteEventByIdApi(event._id, accessToken);
      if (result?.success === true) {
        Swal.fire({
          position: "top-end",
          title: result?.msg,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "text-xl text-accent2 font-heading",
            popup: "bg-accent1",
          },
        });
        router.push("/pdp");
        router.refresh();
      } else {
        Swal.fire({
          position: "top-end",
          title: result?.msg,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: "text-xl text-accent2 font-heading",
            popup: "bg-red-200",
          },
        });
      }
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
      <section className={clsx("mt-4 w-[350px]", "relative", "flex gap-4")}>

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
