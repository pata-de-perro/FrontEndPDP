import Image from "next/image";
import clsx from "clsx";

// import heroAuth from "../components/heroAuth"
// import calendarIcon from "../components/calendarIcon";
import inviteImage from "../../../public/InviteImage.png";

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

      <div className="mt-[16px] mr-[24px] w-[auto] flex items-center">
        <div className="w-[40px] h-[40px] rounded-full bg-secondaryOpacity flex justify-center items-center">
          <Image
            src="Icono-Fecha.svg"
            width={24}
            height={24}
            alt="Calendar icon"
          />
        </div>
        <p className="ml-4 font-body text-h3">Revisa tus planes</p>
      </div>

      {/* Revisa tus planes aceptados y o creados*/}
      <div className="container border-b pb-6 flex flex-wrap justify-evenly">
        {/* EVENT CARD */}
        <div
        className={clsx(
          "bg-white shadow-xl rounded-2xl",
          "w-[400px]",
          "flex-none ",
          "m-3",
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

        {/* OUTING CARD */}
        <div
        className={clsx(
          "bg-white shadow-xl rounded-2xl",
          "w-[400px]",
          "flex-none ",
          "m-3",
          "grid justify-items-center items-start"
        )}
      >
        <div
          className={clsx(
            "rounded-t-2xl",
            "w-[400px] h-[150px]",
            "bg-primary",
            "mb-2"
          )}
        ></div>
        <div className="infoContainer w-[350px]">
          <div className="flex justify-between content-end">
            <p className="font-heading text-accent2 text-h4">
              Nombre de tu viaje
            </p>
            <Image
              src="/airport_shuttle.svg"
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
              15 Mayo - 18 Mayo
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
                <div className={clsx()}>
                  <p
                    className={clsx(
                      "font-heading text-h3 text-azulGris900 mt-4"
                    )}
                  >
                    Lugares de interés
                  </p>
                  {/* // LUGARES DE INTERÉS */}
                  <div>
                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Hotel
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Restaurantes
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Vida nocturna
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Atracciones turísticas
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Museos y Arte
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Actividades al aire libre
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                      "bg-primary",
                      "text-white font-body text-regular",
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
                  )}>Editar viaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* OUTING CARD */}
        <div
        className={clsx(
          "bg-white shadow-xl rounded-2xl",
          "w-[400px]",
          "flex-none ",
          "m-3",
          "grid justify-items-center items-start"
        )}
      >
        <div
          className={clsx(
            "rounded-t-2xl",
            "w-[400px] h-[150px]",
            "bg-primary",
            "mb-2"
          )}
        ></div>
        <div className="infoContainer w-[350px]">
          <div className="flex justify-between content-end">
            <p className="font-heading text-accent2 text-h4">
              Nombre de tu viaje
            </p>
            <Image
              src="/airport_shuttle.svg"
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
              15 Mayo - 18 Mayo
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
              //   "bg-secondary",
              //   "w-[216px] h-[45px] rounded-xl my-6",
              //   "font-body text-regular text-white",
              //   "flex justify-center items-center",
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
                <div className={clsx()}>
                  <p
                    className={clsx(
                      "font-heading text-h3 text-azulGris900 mt-4"
                    )}
                  >
                    Lugares de interés
                  </p>
                  {/* // LUGARES DE INTERÉS */}
                  <div>
                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Hotel
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Restaurantes
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Vida nocturna
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Atracciones turísticas
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Museos y Arte
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="collapse collapse-arrow">
                      <input type="checkbox" default="Checked" />
                      <div
                        className={clsx(
                          "collapse-title",
                          "font-heading text-regularSemiBold text-azulGris900 mt-4"
                        )}
                      >
                        Actividades al aire libre
                      </div>
                      <div
                        className={clsx("collapse-content", "grid grid-cols-2")}
                      >
                        <div className="flex items-end mt-2">
                          <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900">
                            Lugar de interés
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                      "bg-primary",
                      "text-white font-body text-regular",
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
                  )}>Editar viaje</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

      {/* CARDS */}
      {/* INVITE CARD */}
      <div className="container border-b pb-6 flex flex-wrap justify-evenly">
        <div
          className={clsx(
            "bg-white shadow-xl rounded-2xl",
            "w-[304px] h-[356px]",
            "grid justify-items-center",
            "m-6",
            "flex-none",
            "md:w-[540px] md:h-[190px]",
            // "md:border",
            "md:flex md:flex-row-reverse"
          )}
        >
          <div>
            <Image
              src="/InviteImage.png"
              width={304}
              height={160}
              className={clsx(
                "rounded-t-2xl",
                "md:rounded-r-2xl md:rounded-tl-none",
                "md:h-[190px] md:w-[260px]"
              )}
            />
          </div>
          <div className={clsx("md:grid md:justify-items-start", "md:mr-10")}>
            <p className="font-heading text-accent2 text-h4 mt-2">
              Nombre de tu viaje
            </p>
            <div className="flex items-center">
              <Image
                src="/calendar_today.svg"
                width={21}
                height={21}
                alt="icon calendar today"
              />
              <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
                15 Mayo - 17 Mayo
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
              <p className="font-body text-inviteSmallText text-azulGris600">
                0
              </p>
              <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
                Personas
              </p>
            </div>
            <button
              className={clsx(
                "bg-secondary",
                "w-[216px] h-[45px] rounded-xl",
                "mt-4",
                "flex justify-center items-center",
                "md:mb-2"
              )}
            >
              <p className="font-body text-regular text-accent2">
                Aceptar invitación
              </p>
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

        <div
          className={clsx(
            "bg-white shadow-xl rounded-2xl",
            "w-[304px] h-[356px]",
            "grid justify-items-center",
            "m-6",
            "flex-none",
            "md:w-[540px] md:h-[190px]",
            // "md:border",
            "md:flex md:flex-row-reverse"
          )}
        >
          <div>
            <Image
              src="/InviteImage.png"
              width={304}
              height={160}
              className={clsx(
                "rounded-t-2xl",
                "md:rounded-r-2xl md:rounded-tl-none",
                "md:h-[190px] md:w-[260px]"
              )}
            />
          </div>
          <div className={clsx("md:grid md:justify-items-start", "md:mr-10")}>
            <p className="font-heading text-accent2 text-h4 mt-2">
              Nombre de tu viaje
            </p>
            <div className="flex items-center">
              <Image
                src="/calendar_today.svg"
                width={21}
                height={21}
                alt="icon calendar today"
              />
              <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
                15 Mayo - 17 Mayo
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
              <p className="font-body text-inviteSmallText text-azulGris600">
                0
              </p>
              <p className="font-body text-inviteSmallText text-azulGris600 ml-2">
                Personas
              </p>
            </div>
            <button
              className={clsx(
                "bg-secondary",
                "w-[216px] h-[45px] rounded-xl",
                "mt-4",
                "flex justify-center items-center",
                "md:mb-2"
              )}
            >
              <p className="font-body text-regular text-accent2">
                Aceptar invitación
              </p>
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
