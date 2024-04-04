import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth, TitleSection } from "@/components/layouts";
import {  AiOutlineUser } from "react-icons/ai";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile";

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
          <ContainerEditProfile />

      <TitleSection urlIcon={icon} title="Perfil" />
      {/* <TitleSection urlIcon={"/friends-icon.svg"} title="Amigos" /> */}
      {/* <section className="h-[150px]"></section> */}

    </>
  );
}
