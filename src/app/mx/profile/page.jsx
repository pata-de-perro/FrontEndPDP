import clsx from "clsx";
import Image from "next/image";
import { TitleSection } from "@/app/components/common";
import { HeroAdmin } from "@/app/components/common";
import { BtnPrimary } from "@/app/components/common";
import { NotInvite } from "@/app/components/events/NotInvite";

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
        urlImg="/profile-pic.png"
        >
        <p className="font-heading text-regularSemiBold">ninavidales@email.com</p>
        <p className="font-heading text-regularSemiBold">331245678</p>
        </HeroAdmin>
        <section className="mt-4">
            <div className={clsx(
                "mb-16",
                "flex justify-around"
            )}>
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
            {/* <div className="grid grid-cols-1 justify-items-center w-fit bg-accent1">
                <div className={clsx(
                    "w-[200px] h-[200px]",
                    "rounded-full",
                    // "flex justify-center",
                    "bg-red-500"
                )}></div>
                <span className={clsx(
                    "grid grid-cols-3 justify-items-end",
                    // "ml-2",
                    "w-fit",
                    // "bg-red-500"
                )}>
                    {dataUser.map((item, index) => {
                        return(
                            <div key={index}>
                                <h2 className={clsx(
                                    "font-heading text-h4",
                                    "text-accent2 text-center",
                                    // "border-2"
                                    )}>{item.num}</h2>
                                <p className={clsx(
                                    "font-body text-regular",
                                    "mx-4",
                                    // "border",
                                )}>{item.title}</p>
                                 </div>
                        )
                    })}
                </span>
            </div> */}
        </section>
        {/* <BtnPrimary 
        title="Editar"
        onClick={onclick}
        /> */}

        <TitleSection 
        urlIcon="/friends-icon.svg"
        title="Amigos"
        />
        <section className="h-[150px]">

        </section>

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
