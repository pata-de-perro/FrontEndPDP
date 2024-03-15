import clsx from "clsx";
import Image from "next/image";
import { TitleSection } from "@/app/components/common";

export default function Profile() {

  return (
    <section className="flex flex-wrap">
        <TitleSection 
        urlIcon="/Avatar.svg"
        title="Perfil"
        />
      <div className={clsx(
            "bg-gradient-to-br from-[#F5F5F5] to-75% to-secondary",
            "rounded-2xl",
            "m-2 p-[25px]",
            "w-full",
            "flex",
            "md:p-10 ",
            // "lg:w-[1000px]"
          )}>
        <div className={clsx(
            "justify-start"
        )}
        >
          <p className="font-heading text-h3">Nina Vidales</p>
          <p className="font-heading text-regularSemiBold">
            ninavidales@email.com
          </p>
          <p className="font-heading text-regularSemiBold">331245678</p>
        </div>
        <div className={clsx(
              "absolute flex justify-center",
              "right-0",
              "flex-wrap",
              "w-[220px]",
            //   "ml-10",
            )}>
          <Image
            src="/ProfilePicture-demo.webp"
            width={120}
            height={120}
            alt="Profile picture"
            className="drop-shadow-lg mb-6"
          />
          <div className="w-[200px] mr-[25px] grid grid-cols-3 text-right">
            <span className="mx-2">
              <p className="font-heading text-h3">45</p>
              <p className="font-heading text-regular">Amigos</p>
            </span>
            <span className="mx-2">
              <p className="font-heading text-h3">35</p>
              <p className="font-heading text-regular">Salidas</p>
            </span>
            <span className="mx-2">
              <p className="font-heading text-h3">35</p>
              <p className="font-heading text-regular">Eventos</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className={clsx(
            "bg-azulGris500",
            "font-body text-regular text-white"
        )}>Editar</button>
        <button>Cambiar imagen</button>
      </div>
    </section>
  );
}
