import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth, TitleSection } from "@/components/layouts";
import {  AiOutlineUser } from "react-icons/ai";
import { ModalContent } from "@/components/common";
import {EditProfile} from "@/components/editProfile/EditProfile";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const icon = <AiOutlineUser/>

  return (
    <>
      <HeroAuth
        title={session.user.name ? session.user.name : "Personaliza tu usuario"}
      >
        <p className="font-heading text-regularSemiBold">
          {session?.user.email}
        </p>
      </HeroAuth>
      <section className="mt-4">
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

          <div className="static">
            <img
              src={
                session.user.picture ? session.user.picture : "/profile-pic.png"
              }
              className={clsx(
                "absolute z-10 right-10 top-20", 
                "border",  
                "sr-only md:not-sr-only ml:not-sr-only",
                "lg:w-[180px] lg:h-[180px]"
                )}
            />
          </div>
        </div>
      </section>

      <TitleSection urlIcon={icon} title="Perfil" />
      {/* <TitleSection urlIcon={"/friends-icon.svg"} title="Amigos" /> */}
      {/* <section className="h-[150px]"></section> */}
      <EditProfile />

      {/* <ModalContent 
      idModal="modal_edit_profile"
      title="Edita tu perfil"
      >
        <EditProfile />
      </ModalContent> */}

    </>
  );
}
