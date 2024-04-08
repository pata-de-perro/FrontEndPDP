import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile/ContainerEditProfile";
import { getProfileApi } from "@/services"
import { birthdayDateProfile } from "@/helpers";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session.user
  const token = session.user.accessToken
  const profileData = (await getProfileApi(session.user.id, token)).data

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
          {birthdayDateProfile(profileData.birthdate)}
        </p>
        <p className="font-heading text-regularSemiBold">
          {profileData.gender}
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
          <ContainerEditProfile profileData={profileData} token={token}/>
    </>
  );
}
