"use client";
import clsx from "clsx";
import { ModalContent,} from "@/components/common";
import { EditProfile } from "../EditProfile/EditProfile";

export function ContainerEditProfile({ profileData, token }) {

  const handleOpenEditProfileModal = () => {
    document.getElementById("modal_edit_profile").showModal();
  };

  const handleCloseEditProfileModal = () => {
    document.getElementById("modal_edit_profile").close();
  };

  return (
    <>
      <div className={clsx("flex justify-start", "mt-4")}>
        <button
          className={clsx(
            "w-[180px] h-[45px] mx-2 rounded-xl",
            "bg-primary",
            "font-body text-regularSemiBold text-white",
            "hover:bg-primary/75 hover:text-white"
          )}
          onClick={ () => handleOpenEditProfileModal() }
        >
          Editar perfil
        </button>
      </div>
      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile  
          profileData={profileData} 
          handleCloseEditModal={handleCloseEditProfileModal}
          token={token}
        />
      </ModalContent>
    </>
  );
}