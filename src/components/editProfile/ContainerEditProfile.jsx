"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { EditProfile } from "./EditProfile";

export function ContainerEditProfile({}) {
  const handleOpenModal = () => {
    document.getElementById("modal_edit_profile").showModal();
  };
  return (
    <>
      <div className={clsx("flex justify-start")}>
        <button
          className={clsx(
            "w-[180px] h-[45px] mx-2 rounded-xl",
            // "absolute right-4 -bottom-10",
            "bg-azulGris100",
            "font-body text-regularSemiBold text-azulGris900",
            // "md:static",
            "hover:bg-primary hover:text-white"
            // "disabled: cursor-not-allowed"
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
        <EditProfile />
      </ModalContent>
    </>
  );
}
