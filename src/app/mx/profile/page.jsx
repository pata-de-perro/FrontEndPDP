import clsx from "clsx";
import { TitleSection } from "@/app/components/common";
import { HeroAdmin } from "@/app/components/common";
import { NotInvite } from "@/app/components/events/NotInvite";

export default function Profile() {
  return (
    <>
      <main>
        <TitleSection urlIcon={"/person_icon.svg"} title="Perfil" />
        <HeroAdmin title="Nina Vidales">
          <p className="font-heading text-regularSemiBold">
            ninavidales@email.com
          </p>
          <p className="font-heading text-regularSemiBold">331245678</p>
        </HeroAdmin>
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
                "md:static"
              )}
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
                "md:static"
              )}
            >
              Cambiar imagen
            </button>

            <div className="static">
              <img
                src="/profile-pic.png"
                width={150}
                height={150}
                className={clsx("absolute z-10 right-10 top-16")}
              />
            </div>
          </div>
        </section>

        <TitleSection urlIcon="/friends-icon.svg" title="Amigos" />
        <section className="h-[150px]"></section>

        <TitleSection
          urlIcon="/Icono-Fecha.svg"
          title="Invitaciones pendientes de aceptar"
        />

        <section className="w-full">
          <NotInvite />
        </section>
      </main>
    </>
  );
}
