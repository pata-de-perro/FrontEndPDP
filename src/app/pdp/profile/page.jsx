import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile/ContainerEditProfile";
import { getProfileApi } from "@/services";
import { AvatarInitials, ProfileDataView } from "@/components/profileView/";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session.user;
  const token = session.user.accessToken;
  const profileData = (await getProfileApi(session.user.id, token)).data;

  const initials = () => {
    const fullName = profileData.name;
    const separeteName = fullName.split(" ");
    const firstIn = separeteName[0].charAt(0);
    const secondIn = separeteName[1].charAt(0);
    const nameInitials = firstIn + secondIn;

    return nameInitials;
  };

  return (
    <>
      <HeroAuth title="Perfil de usuario">
        <p>Completa tu perfil</p>
        <div className="absolute z-10 right-0 top-0">
          <AvatarInitials data={profileData}/>
        </div>
      </HeroAuth>
      <ContainerEditProfile profileData={profileData} token={token} />
      <ProfileDataView data={profileData}/>
    </>
  );
}
