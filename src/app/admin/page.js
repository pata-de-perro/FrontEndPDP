import Image from "next/image";
import clsx from "clsx";

// import heroAuth from "../components/heroAuth"
// import calendarIcon from "../components/calendarIcon";

export default function page() {
  return (
    //hero Auth
    <main>
      <div className={clsx(
          "bg-gradient-to-r from-[#F5F5F5] to-secondary",
          "rounded-2xl",
          "mr-[24px] mt-[35px] p-[24px]",
          "w-[auto] h-[auto]",
      )}>
        <div className={clsx("flex", "relative")}>
          <div className="w-[500px]">
            <p
              className={clsx("font-heading text-azulGris900 text-h1", "mb-2")}
            >
              ¡Facilitando tus planes!
            </p>
            <p
              className={clsx(
                "font-body text-azulGris900 text-regular",
                "mb-8",
                "md:w-[350px] md:mb-0"
              )}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className={clsx(
                "w-[224px] h-[45px]",
                "rounded-2xl",
                "mt-8",
                "bg-primary",
                "font-body text-regular text-white",
                "justify-center",
                "absolute right-4 -bottom-10",
                "md:static"
              )}
            >
              Planea tu primer viaje
            </button>
          </div>
          <Image
            src="/Reminders-bro.svg"
            width={330}
            height={330}
            alt="progresive app pana"
            className={clsx(
              "sr-only",
              "md:absolute md:-right-8 md:top-5",
              "md:not-sr-only md:w-[225px] md:h-[225px] ",
              "lg:w-[330px] lg:h-[330px] lg:-top-16"
            )}
          />
        </div>
      </div>

      {/* Revisa tus planes */}

      <div className="mt-[16px] mr-[24px] w-[auto] flex items-center ">
        <div className="w-[40px] h-[40px] rounded-full bg-secondaryOpacity flex justify-center items-center border">
          <Image
            src="Icono-Fecha.svg"
            width={24}
            height={24}
            alt="Calendar icon"
            className={clsx(
              
            )}
          ></Image>
        </div>
        <p className="ml-4 font-body text-h3">Revisa tus planes</p>
      </div>

      {/* Botón para registrar primer plan */}
      <div className="w-[full] flex justify-center my-[24px] border-b pb-6">
        <button className="flex flex-wrap w-[200px] justify-center">
          <Image
            src="Icono-Fecha.svg"
            width={100}
            height={100}
            alt="Calendar icon on button"
          />
          <p className={clsx("text-regular font-body")}>
            Registra tu primer plan
          </p>
        </button>
      </div>

      {/* Invitaciones tus planes */}

      <div className="mt-[16px] mr-[24px] w-[auto] flex items-center">
        <div className="w-[40px] h-[40px] rounded-full bg-secondaryOpacity flex justify-center items-center">
          <Image
            src="Icono-Fecha.svg"
            width={24}
            height={24}
            alt="Calendar icon"
          />
        </div>
        <p className="ml-4 font-body text-h3">Invitaciones</p>
      </div>

      <div className="container">
        <div className={clsx(
          "bg-white shadow-xl rounded-2xl",
          "w-[304px] h-[356px]",
          "grid justify-items-center",
          "mt-6",
          "md:w-[540px] md:h-[190px]",
          "md:border",
          "md:flex md:flex-row-reverse"
        )}>
          <div>
            <Image
            src="/InviteImage.png"
            width={304}
            height={160}
            className={clsx(
              "rounded-t-2xl",
              "md:rounded-r-2xl md:rounded-tl-none",
              "md:h-[190px] md:w-[260px]",
            )} />
          </div>
          <div className={clsx(
            "md:grid md:justify-items-start",
            "md:mr-10"
          )}>
            <p className="font-heading text-accent2 text-h4 mt-2">
              Nombre de tu viaje
            </p>
            <div className="flex items-center">
              <span>
                <Image
                  src="/calendar_today.svg"
                  width={12}
                  height={12}
                  alt="icon calendar today"
                />
              </span>
              <span className="font-body inviteSmallText text-azulGris600 ml-2">
                15 Mayo - 17 Mayo
              </span>
            </div>
            <div className="flex items-center">
            <Image
                src="/pin_drop.svg"
                width={21}
                height={21}
                alt="invite icon"
                className="mr-2"
                />
              <p className="font-body inviteSmallText text-azulGris600 ml-2">
                Ubicación
              </p>
            </div>
            <div>
              <span className="flex">
              <Image
                src="/people-icon.svg"
                width={21}
                height={21}
                alt="invite icon"
                className="mr-2"
                />
                <p className="font-body inviteSmallText text-azulGris600 ml-2">
                  0
                </p>
                <p className="font-body inviteSmallText text-azulGris600 ml-2">
                  Personas
                </p>
              </span>
            </div>
          <button className={clsx(
            "bg-secondary",
            "w-[216px] h-[45px] rounded-xl",
            "mt-4",
            "flex justify-center items-center",
            "md:mb-2"
          )}>
            <p className="font-body text-regular text-accent2">Aceptar invitación</p>
            <Image
            src="/Invite.svg"
            width={21}
            height={21}
            alt="invite icon"
            className="mx-2"
            />
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}
