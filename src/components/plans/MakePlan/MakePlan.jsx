"use client";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postEventLocationsToApi } from "@/services";
import { placesOfInterestMenu } from "@/mocks/catalogs";
import { GoogleMapPlaces } from "@/components/maps";
import { ModalDrawer } from "@/components/common";
import { ElementPlacesPlan } from "@/components/plans";

export function MakePlan({ data, mapId, user, idPlan }) {
  const { title, locationEvent, coordsEvent, isTravel, locations } = data;
  const ubicationMap = { lat: coordsEvent[0], lng: coordsEvent[1] };
  const { accessToken } = user;
  const router = useRouter();

  const [placeRequest, setPlaceRequest] = useState(
    isTravel ? ["lodging"] : ["restaurant"]
  );
  const [open, setOpen] = useState(false);
  const [modalState, setModalState] = useState({ title: null, content: null });
  const [ubicationsUser, SetUbicationsUser] = useState([]);

  const toggleVisible = () => {
    setOpen(!open);
  };

  const handleClickMarker = (dataPlace) => {
    setModalState({
      title: dataPlace.name,
      content: (
        <ElementPlacesPlan
          data={dataPlace}
          handleAddUbicationToEvent={handleAddUbicationToEvent}
        />
      ),
    });
    setOpen(true);
  };

  const handleAddUbicationToEvent = (ubication) => {
    const { place_id, name, type, coords, vicinity, contact } = ubication;

    const newUbication = {
      placeIdGoogle: place_id,
      name: name,
      type: type,
      vicinity: vicinity,
      simpleAddress: contact.address,
      coords: coords,
    };
    SetUbicationsUser([...ubicationsUser, newUbication]);
    setOpen(false);
  };

  const onSubmitLocations = async () => {
    const result = await postEventLocationsToApi(
      idPlan,
      accessToken,
      ubicationsUser
    );

    if (result.success === true) {
      router.push("/pdp/");
      router.refresh();
    }
  };

  return (
    <>
      <div className={clsx(
        "flex flex-col-reverse",
        "justify-between", 
        "mt-4",
        "md:flex-row "
        )}>
        <div className={clsx(
          "h-[530px] w-[360px]",
          "md:w-[400px] md:h-[550px]",
          "lg:h-[350px] lg:w-[780px] lg:mb-4",
          )}>
          <p className="font-body text-xs m-2">
            Selecciona un pin en el mapa para ver la información del lugar. Tienes que tener al menos un lugar seleccionado para poder continuar en la creación de tu evento
          </p>
          <GoogleMapPlaces
            mapId={mapId}
            ubicationsUser={ubicationsUser}
            ubicationMap={ubicationMap}
            placeRequest={placeRequest}
            handleClickMarker={handleClickMarker}
            locations={locations}
          />
        </div>
        <div className={clsx(
          "w-[fit] h-[fit]",
          "rounded-xl", 
          "md:w-[220px] md:border-l",
          "lg:w-[350px]",
          "p-2 md:pr-4 md:pl-2 md:py-0",
          )}>
          <div
            className={clsx(
              "h-full w-full",
              "flex flex-col items-center justify-between",
              "rounded-xl",
            )}
          >
            <div className="mt-4 px-2 md:px-0 ">
              <div className="">
                <h3
                  className={clsx(
                    "font-heading text-h3 text-center",
                    "text-azulGris900"
                  )}
                >
                  {title}
                </h3>
                <p
                  className={clsx(
                    "font-body text-regular text-center",
                    "text-azulGris900"
                  )}
                >
                  {locationEvent}
                </p>
              </div>
              <div className={clsx("flex flex-col flex-wrap", "mt-2")}>
                <p className="font-body text-xs text-center">
                  Selecciona una categoría para que puedas visualizar los lugares en el mapa
                </p>
                <span
                  className={clsx(
                    "font-body text-regularSemiBold",
                    "text-center",
                    "my-4"
                  )}
                >
                  Categorías de lugares
                </span>

                <div className={clsx(
                  "flex flex-col",
                  // "grid grid-cols-2 "
                  )}>
                  {placesOfInterestMenu.map(
                    (itemPlace) =>
                      (isTravel || itemPlace.typePlace[0] !== "lodging") && (
                        <div
                          key={itemPlace.key}
                          className={clsx(
                            "flex items-center",
                            "hover:cursor-pointer"
                          )}
                          onClick={() => setPlaceRequest(itemPlace.typePlace)}
                        >
                          <img
                            src={itemPlace.pinUrl}
                            alt="gps pin icon"
                            className="h-12 w-auto"
                          />
                          <span
                            className={clsx(
                              "font-body text-regular text-azulGris900",
                              "mb-2",
                              placeRequest === itemPlace.typePlace &&
                                "text-primary font-semibold"
                            )}
                          >
                            {itemPlace.title}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className={clsx(
              "flex", 
              "w-full m-1"
              )}>
              {ubicationsUser.length > 0 && (
                <button
                  className={clsx(
                    "btn btn-block",
                    "bg-accent2 text-white",
                    "hover:bg-accent2/95"
                  )}
                  onClick={onSubmitLocations}
                >
                  Guardar ubicaciones
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalDrawer
        title={modalState.title}
        visible={open}
        toggleVisible={toggleVisible}
      >
        {modalState.content}
      </ModalDrawer>
    </>
  );
}
