"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { EditProfile } from "../EditProfile/EditProfile";
import { UploadAvatar } from "../UploadAvatar/UploadAvatar";

export function ContainerEditProfile({ session }) {
  
  const handleOpenModal = () => {
    document.getElementById("modal_edit_profile").showModal();
  };

  const handleOpenAvatarModal = () => {
    document.getElementById("modal_upload_avatar").showModal();
  }

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
            "bg-azulGris100",
            "font-body text-regularSemiBold text-azulGris900",
            "hover:bg-primary hover:text-white"
            // "justify-center absolute right-4 -bottom-10",
            // "md:static",
            // "disabled: cursor-not-allowed"
          )}
          onClick={ () => handleOpenAvatarModal()}
          // disabled
        >
          Cambiar imagen
        </button>
      </div>

      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile session={session}/>
      </ModalContent>

      <ModalContent idModal="modal_upload_avatar" title="Sube tu fotografía">
        <UploadAvatar session={session}/>
      </ModalContent>
    </>
  );
}
