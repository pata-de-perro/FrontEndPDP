import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeroAuth, TitleSection } from "@/components/layouts";

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <TitleSection urlIcon={"/person_icon.svg"} title="Perfil" />
      <HeroAuth
        title={session.user.name ? session.user.name : "Nombre de usuario"}
      >
        <p className="font-heading text-regularSemiBold">
          {session?.user.email}
        </p>
      </HeroAuth>
      <section className="mt-4">
        <div className={clsx("flex justify-start")}>
          <button
            className={clsx(
              "mx-2",
              "w-[180px] h-[45px]",
              "font-body text-regular text-white",
              "absolute right-4 -bottom-10",
              "rounded-xl",
              "bg-azulGris500",
              "md:static",
              "disabled: cursor-not-allowed"
            )}
            disabled
          >
            Editar
          </button>

          <button
            className={clsx(
              "w-[180px] h-[45px]",
              "rounded-xl",
              "mx-2",
              "bg-secondary",
              "font-body text-regular text-accent2",
              "justify-center",
              "absolute right-4 -bottom-10",
              "md:static",
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
              width={180}
              height={180}
              className={clsx("absolute z-10 right-10 top-20", "border")}
            />
          </div>
        </div>
      </section>

      <TitleSection urlIcon="/friends-icon.svg" title="Amigos" />
      <section className="h-[150px]"></section>
    </>
  );
}
