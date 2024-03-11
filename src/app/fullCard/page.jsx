"use client";

import clsx from "clsx";
import Image from "next/image";

export default function fullCard() {
  const events = [
    {
      eventName: "Viaje a Sayulita",
      eventStartDate: "15 Mayo",
      eventEndDate: "17 Mayo",
      isTrip: true,
      location: "Sayulita, Jalisco",
      map: "xx",
      listPlacesInterest: [
        {
          hotels: ["hotel 1", "hotel 2", "hotel 3"],
          restaurant: ["restaurant 1", "restaurant 2", "restaurant 3"],
          turistAtractions: ["atraccion 1", "atraccion 2", "atraccion 3"],
          nightLife: [
            "centro nocturno 1",
            "centro nocturno 2",
            "centro nocturno 3",
          ],
          museums: ["museo 1", "museo 2", "museo 3"],
          openAirActivities: ["aire libre 1", "aire libre 2", "aire libre 3"],
        },
      ],
      travelers: [
        {
          name: "Invitado 1",
          aceptedInvite: true,
        },
        {
          name: "Invitado 2",
          aceptedInvite: false,
        },
        {
          name: "Invitado 3",
          aceptedInvite: true,
        },
        {
          name: "Invitado 4",
          aceptedInvite: true,
        },
      ],
    },
    {
      eventName: "Cumpleaños de Anita",
      eventStartDate: "15 Mayo",
      eventEndDate: "17 Mayo",
      isTrip: false,
      location: "Sayulita, Jalisco",
      map: "xx",
      listPlacesInterest: [
        {
          hotels: ["hotel 1", "hotel 2", "hotel 3"],
          restaurant: ["restaurant 1", "restaurant 2", "restaurant 3"],
          turistAtractions: ["atraccion 1", "atraccion 2", "atraccion 3"],
          nightLife: [
            "centro nocturno 1",
            "centro nocturno 2",
            "centro nocturno 3",
          ],
          museums: ["museo 1", "museo 2", "museo 3"],
          openAirActivities: ["aire libre 1", "aire libre 2", "aire libre 3"],
        },
      ],
      travelers: [
        {
          name: "Invitado 1",
          aceptedInvite: true,
        },
        {
          name: "Invitado 2",
          aceptedInvite: false,
        },
        {
          name: "Invitado 3",
          aceptedInvite: true,
        },
        {
          name: "Invitado 4",
          aceptedInvite: true,
        },
      ],
    },
    {
      eventName: "Viaje a Durango",
      eventStartDate: "15 Mayo",
      eventEndDate: "17 Mayo",
      isTrip: true,
      location: "Durango, MX",
      map: "xx",
      listPlacesInterest: [
        {
          hotels: ["hotel 1", "hotel 2", "hotel 3"],
          restaurant: ["restaurant 1", "restaurant 2", "restaurant 3"],
          turistAtractions: ["atraccion 1", "atraccion 2", "atraccion 3"],
          nightLife: [
            "centro nocturno 1",
            "centro nocturno 2",
            "centro nocturno 3",
          ],
          museums: ["museo 1", "museo 2", "museo 3"],
          openAirActivities: ["aire libre 1", "aire libre 2", "aire libre 3"],
        },
      ],
      travelers: [
        {
          name: "Invitado 1",
          aceptedInvite: true,
        },
        {
          name: "Invitado 2",
          aceptedInvite: false,
        },
        {
          name: "Invitado 3",
          aceptedInvite: true,
        },
        {
          name: "Invitado 4",
          aceptedInvite: true,
        },
      ],
    },
  ];

  return (
    <div className="container flex flex-wrap justify-evenly">
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
              Nombre de evento
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
                        Pendiente de aceptar invitación
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
                        Pendiente de aceptar invitación
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
