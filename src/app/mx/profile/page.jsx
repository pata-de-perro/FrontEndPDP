import clsx from "clsx";
import Image from "next/image";
import { TitleSection } from "@/app/components/common";
import { HeroAdmin } from "@/app/components/common";
import { BtnPrimary } from "@/app/components/common";

export default function Profile() {
    const dataUser =[
        {
            title:"Amigos",
            num:5,
        },
        {
            title:"Salidas",
            num:8,
        },
        {
            title:"Eventos",
            num:1,
        },
    ]
  return (
    <>
    <main>
        <TitleSection 
        urlIcon="/person_icon.svg"
        title="Perfil"
        />
        <HeroAdmin 
        title="Nina Vidales"
        >
        <p className="font-heading text-regularSemiBold">ninavidales@email.com</p>
        <p className="font-heading text-regularSemiBold">331245678</p>
        </HeroAdmin>
        <section className="mt-4">
            <div>
                <button      
                    className={clsx(
                    "w-[180px] h-[45px]",
                    "rounded-xl",
                    // "m-8",
                    "bg-azulGris500",
                    "font-body text-regular text-white",
                    "justify-center",
                    "absolute right-4 -bottom-10",
                    "md:static"
                    )}>Editar</button>
                <button
                      className={clsx(
                        "w-[180px] h-[45px]",
                        "rounded-xl",
                        // "m-8",
                        "bg-secondary",
                        "font-body text-regular text-accent2",
                        "justify-center",
                        "absolute right-4 -bottom-10",
                        "md:static"
                      )}>Cambiar imagen</button>
            </div>
            <div>
                <img></img>
                <span className="grid grid-cols-3">
                    {dataUser.map((item, index) => {
                        
                    })}
                </span>
            </div>
        </section>
        {/* <BtnPrimary 
        title="Editar"
        onClick={onclick}
        /> */}

        <TitleSection 
        urlIcon="/person_icon.svg"
        title="Amigos"
        />

        <TitleSection 
        urlIcon="/Icono-Fecha.svg"
        title="Invitaciones pendientes de aceptar"
        />      

    </main>
    </>

  );
}
