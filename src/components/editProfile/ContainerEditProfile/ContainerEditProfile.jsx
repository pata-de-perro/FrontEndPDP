"use client";
import clsx from "clsx";
import { useState } from "react";
import { ModalContent } from "@/components/common";
import { EditProfile } from "../EditProfile/EditProfile";
import { getProfileApi } from "@/services";

export async function ContainerEditProfile({ profileData, token }) {
  // const [msgResult, setMsgResult] = useState();
  
  const handleOpenModal = () => {
    document.getElementById("modal_edit_profile").showModal();
  };

  const handleCloseEditModal = () => {
    document.getElementById("modal_edit_profile").close();
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
      </div>

      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile  
        profileData={profileData} 
        handleCloseEditModal={handleCloseEditModal}
        token={token}
        // setMsgResult={setMsgResult}
        />
      </ModalContent>
    </>
  );
}