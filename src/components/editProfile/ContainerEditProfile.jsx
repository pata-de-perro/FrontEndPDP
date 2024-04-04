"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { EditProfile } from "./EditProfile";

export function ContainerEditProfile({ session }) {
  const handleOpenModal = () => {
    document.getElementById("modal_edit_profile").showModal();
  };
  return (
    <>
      <div className={clsx("flex justify-start", "mt-4")}>
        <button
          className={clsx(
            "w-[180px] h-[45px] mx-2 rounded-xl",
            "bg-azulGris100",
            "font-body text-regularSemiBold text-azulGris900",
            "hover:bg-primary hover:text-white"
          )}
          onClick={ () => handleOpenModal() }
        >
          Editar
        </button>

        <button
          className={clsx(
            "w-[180px] h-[45px]",
            "mx-2 rounded-xl",
            // "justify-center absolute right-4 -bottom-10",
            "bg-azulGris100",
            "font-body text-regularSemiBold text-azulGris900",
            // "md:static",
            "disabled: cursor-not-allowed"
          )}
          disabled
        >
          Cambiar imagen
        </button>
      </div>

      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile session={session}/>
      </ModalContent>
    </>
  );
}
