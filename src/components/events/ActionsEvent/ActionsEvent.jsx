"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteEventByIdApi } from "@/services";
import { ModalContent, ToastMsgTop } from "@/components/common";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

export function ActionsEvent({ user, eventId }) {
  const { accessToken } = user;
  const [msgResult, setMsgResult] = useState();
  const router = useRouter();

  const handleDeletEvent = async () => {
    const result = await deleteEventByIdApi(eventId, accessToken);
    if (result?.success === true) {
      setMsgResult({ type: "success", msg: result?.msg });
      router.push("/pdp");
    } else {
      setMsgResult({ type: "error", msg: result?.msg });
    }
  };

  const handleOpenEditModal = () => {
    document.getElementById("edit_event_modal").showModal();
  };

  return (
    <>
      {msgResult && (
        <ToastMsgTop type={msgResult.type} message={msgResult.msg} />
      )}
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
        <h2>Editando...</h2>
      </ModalContent>
    </>
  );
}
