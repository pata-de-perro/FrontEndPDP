import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth, TitleSection } from "@/components/layouts";
import {  AiOutlineUser } from "react-icons/ai";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile/ContainerEditProfile";

export default async function Profile() {
  const { user } = await getServerSession(authOptions);
  const icon = <AiOutlineUser/>

  return (
    <>
      <HeroAuth
        title={user.name ? user.name : "Personaliza tu usuario"}
      >
        <p className="font-heading text-regularSemiBold">
          {user.email}
        </p>
      </HeroAuth>
         <div className="static">
            <img
              src={
                user.avatar ? user.avatar : "/profile-pic.png"
              }
              width={100}
              height={100}
              className={clsx(
                "absolute z-10 right-10 top-20",
                 "border",
                 "sm:w-[100px] sm:h-[100px]",
                 "md:w-[120px] md:h-[120px]",
                 "lg:w-[180px] lg:h-[180px]",
                 )}
            />
          </div>
          <ContainerEditProfile user={user}/>

      <TitleSection urlIcon={icon} title="Perfil" />
      {/* <TitleSection urlIcon={"/friends-icon.svg"} title="Amigos" /> */}
      {/* <section className="h-[150px]"></section> */}

    </>
  );
}
