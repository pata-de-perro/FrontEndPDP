"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { EditProfile } from "../EditProfile/EditProfile";
import { getProfileApi } from "@/services";

export async function ContainerEditProfile({ user }) {
  const { accessToken } = user;
  const { id } = user;
  const { data: profileData } = await getProfileApi(id, accessToken)
  
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
      </div>

      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile  profileData={profileData} token={accessToken}/>
      </ModalContent>
    </>
  );
}