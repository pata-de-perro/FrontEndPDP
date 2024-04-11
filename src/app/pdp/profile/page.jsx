import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth } from "@/components/layouts";
import { ContainerEditProfile } from "@/components/editProfile/ContainerEditProfile/ContainerEditProfile";
import { getProfileApi } from "@/services";
import { AvatarInitials, ProfileDataView } from "@/components/profileView/";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const token = session.user.accessToken;
  const profileData = (await getProfileApi(session.user.id, token)).data;

  return (
    <>
      <HeroAuth title="Perfil de usuario">
        <ContainerEditProfile profileData={profileData} token={token} />
        <div className="absolute z-10 right-0 top-0">
          <AvatarInitials data={profileData}/>
        </div>
      </HeroAuth>

      <ProfileDataView data={profileData}/>
      <img src="/World.svg" className="w-[250px] h-auto absolute right-0 bottom-0 -z-10"></img>
    </>
  );
}
