"use client";
import clsx from "clsx";
import { ModalContent } from "@/components/common";
import { EditProfile } from "../EditProfile/EditProfile";
import { UploadAvatar } from "../UploadAvatar/UploadAvatar";
import { getProfileApi } from "@/services";

export async function ContainerEditProfile({ user }) {
  const { accessToken } = user;
  const { id } = user;
  const { data: profileData } = await getProfileApi(id, accessToken)
  
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
          )}
          onClick={ () => handleOpenAvatarModal()}
        >
          Cambiar imagen
        </button>
      </div>

      <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
        <EditProfile  profileData={profileData} token={accessToken}/>
      </ModalContent>

      <ModalContent idModal="modal_upload_avatar" title="Sube tu fotografía">
        <UploadAvatar profileData={profileData} token={accessToken}/>
      </ModalContent>
    </>
  );
}


// "use client";
// import clsx from "clsx";
// import { ModalContent } from "@/components/common";
// import { EditProfile } from "../EditProfile/EditProfile";
// import { UploadAvatar } from "../UploadAvatar/UploadAvatar";
// import { getProfileApi } from "@/services";

// export async function ContainerEditProfile({ data }) {
//   const { accessToken } = data;
//   const { data: user } = await getProfileApi(accessToken )
//   if(!user){
//     redirect("/pdp");
//   }
  
//   const handleOpenModal = () => {
//     document.getElementById("modal_edit_profile").showModal();
//     console.log(data)
//   };

//   const handleOpenAvatarModal = () => {
//     document.getElementById("modal_upload_avatar").showModal();
//   }

//   return (
//     <>
//       <div className={clsx("flex justify-start", "mt-4")}>
//         <button
//           className={clsx(
//             "w-[180px] h-[45px] mx-2 rounded-xl",
//             "bg-azulGris100",
//             "font-body text-regularSemiBold text-azulGris900",
//             "hover:bg-primary hover:text-white"
//           )}
//           onClick={ () => handleOpenModal() }
//         >
//           Editar
//         </button>

//         <button
//           className={clsx(
//             "w-[180px] h-[45px]",
//             "mx-2 rounded-xl",
//             "bg-azulGris100",
//             "font-body text-regularSemiBold text-azulGris900",
//             "hover:bg-primary hover:text-white"
//           )}
//           onClick={ () => handleOpenAvatarModal()}
//         >
//           Cambiar imagen
//         </button>
//       </div>

//       <ModalContent idModal="modal_edit_profile" title="Edita tu perfil">
//         <EditProfile user={user} />
//       </ModalContent>

//       <ModalContent idModal="modal_upload_avatar" title="Sube tu fotografía">
//         <UploadAvatar userId={data}/>
//       </ModalContent>
//     </>
//   );
// }
