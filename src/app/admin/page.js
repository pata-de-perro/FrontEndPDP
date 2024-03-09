import Image from "next/image";
// import heroAuth from "../components/heroAuth"
import clsx from "clsx";

export default function page() {
  return (
    //hero Auth
    <main>
      <div
        className={clsx(
          "bg-gradient-to-r from-[#F5F5F5] to-secondary",
          "rounded-2xl",
          "mr-[24px] mt-[35px] p-[24px]",
          "w-[auto] h-[auto]"
        )}
      >
        <div className="flex">
          <div className="w-[550px]">
            <p className={clsx("font-heading text-azulGris900 text-h1")}>
              ¡Facilitando tus planes!
            </p>
            <p className={clsx("font-body text-azulGris900 text-regular")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className={clsx(
                "w-[224px] h-[48px]",
                "rounded-2xl",
                "my-8",
                "bg-primary",
                "font-body text-regular text-white",
                "justify-center"
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
            className={clsx("z-10 absolute", "right-10 top-0")}
          ></Image>
        </div>
      </div>

      {/* Revisa tus planes */}

      <div className="mt-[16px] mr-[24px] w-[auto] flex items-center">
        <div className="w-[40px] h-[40px] rounded-full bg-secondaryOpacity flex justify-center items-center">
          <Image
            src="Icono-Fecha.svg"
            width={24}
            height={24}
            alt="Calendar icon"
          ></Image>
        </div>
        <p className="ml-4 font-body text-h3">Revisa tus planes</p>
      </div>

      {/* Botón para registrar primer plan */}
      <div className="w-[full] flex justify-center my-[24px]">
        <button className="flex flex-wrap w-[200px] justify-center">
          <Image
            src="Icono-Fecha.svg"
            width={100}
            height={100}
            alt="Calendar icon on button"
          />
          <p className={clsx(
            "text-regularSemiBold font-body"
          )}>Registra tu primer plan</p>
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
          ></Image>
        </div>
        <p className="ml-4 font-body text-h3">Invitaciones</p>
      </div>
    </main>
  );
}
