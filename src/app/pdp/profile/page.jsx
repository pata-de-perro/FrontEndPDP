import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth, TitleSection } from "@/components/layouts";
import {  AiOutlineUser } from "react-icons/ai";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile/ContainerEditProfile";
import { getProfileApi } from "@/services"

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session.user
  
  const profileData = (await getProfileApi(session.user.id, session.user.accessToken)).data
  console.log(profileData)

  const icon = <AiOutlineUser/>
  
  return (
    <>
      <HeroAuth
        title={profileData.name ? profileData.name : "Personaliza tu usuario"}
      >
        <p className="font-heading text-regularSemiBold">
          {profileData.email}
        </p>
        <p className="font-heading text-regularSemiBold">
          {profileData.phoneNumber}
        </p>
        <p className="font-heading text-regularSemiBold">
          {profileData.birthdate}
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
