

"use client";

import clsx from "clsx";
import Image from "next/image";

export function OutingCard() {

  return (
    <div>
      {/* OUTING CARD */}
      <div
        className={clsx(
          "bg-white shadow-xl rounded-2xl",
          "w-[400px]",
          "flex-none ",
          "m-2",
          "grid justify-items-center items-start"
        )}
      >
        <div
          className={clsx(
            "rounded-t-2xl",
            "w-[400px] h-[150px]",
            "bg-secondary",
            "mb-2"
          )}
        ></div>
        <div className="infoContainer w-[350px]">
          <div className="flex justify-between content-end">
            <p className="font-heading text-accent2 text-h4">
              Nombre de tu evento
            </p>
            <Image
              src="/restaurant.svg"
              width={35}
              height={35}
              alt="trip icon"
              className=""
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/calendar_today.svg"
              width={21}
              height={21}
              alt="icon calendar today"
            />
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              15 Mayo
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/pin_drop.svg"
              width={21}
              height={21}
              alt="invite icon"
            />
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              Ubicación
            </p>
          </div>
          <div className="flex items-end">
            <Image
              src="/people-icon.svg"
              width={21}
              height={21}
              alt="invite icon"
              className="mr-2"
            />
            <p className="font-body text-inviteSmallText text-azulGris600">0</p>
            <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
              Personas
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input
            type="checkbox"
            name="my-accordion-1"
            className="w-[auto] h-[auto]"
          />
          <p
            className={clsx(
              "collapse-title"
            )}
          >
            Ver más información de la salida
          </p>
          <div className="collapse-content">
            <div className={clsx(" mt-2", "dropdown-content")}>
              <div className="w-[350px] h-[280px] bg-azulGris200 text-white">
                MAPA
              </div>
              <div className={clsx()}>

                <div className="my-4">
                  <p
                    className={clsx(
                      "font-heading text-h3 text-azulGris900 mt-4"
                    )}
                  >
                    Viajeros Agregados
                  </p>
                  <div className="ContainerForParters">
                    {/* PERSONA AGREGADA */}
                    <div className="flex justify-around items-end">
                      <div className="flex flex-none items-end">
                        <Image
                          src="/person_icon.svg"
                          width={24}
                          height={24}
                          alt="user icon"
                        />
                        <p className="font-heading text-regularSemiBold text-azulGris900">
                          Juan Perez
                        </p>
                      </div>
                      <p className="font-body text-link text-azulGris900">
                        Invitación pendiente
                      </p>
                    </div>
                    {/* PERSONA AGREGADA */}
                    <div className="flex justify-around">
                      <div className="flex flex-none items-end">
                        <Image
                          src="/person_icon.svg"
                          width={24}
                          height={24}
                          alt="user icon"
                        />
                        <p className="font-heading text-regularSemiBold text-azulGris900">
                          Juan Perez
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around">
                  <button className={clsx(
                      "bg-secondary",
                      "text-accent2 font-body text-regular",
                      "px-6 py-4",
                      "rounded-full",
                      "flex justify-center items-center",
                      "hover:bg-accent1 hover:text-accent2",
                      "hover:border-accent1"
                  )}>Guardar en calendario</button>
                  <button className={clsx(
                      "bg-azulGris100",
                      "text-azulGris900 font-body text-regular",
                      "px-10",
                      "rounded-full",
                      "flex justify-center items-center",
                      "hover:bg-accent1 hover:text-accent2",
                      "hover:border-accent1"
                  )}>Editar salida</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

