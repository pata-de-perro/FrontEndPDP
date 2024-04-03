"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { postEventLocationsToApi } from "@/services";
import { placesOfInterestMenu } from "@/mocks/catalogs";
import { GoogleMapPlaces } from "@/components/maps";
import { ModalDrawer } from "@/components/common";
import { ElementPlacesPlan } from "@/components/plans";

export function MakePlan({ data, mapId, user, idPlan }) {
  const ubicationMap = { lat: data?.coordsEvent[0], lng: data?.coordsEvent[1] };
  const { accessToken } = user;
  const router = useRouter();

  const [placeRequest, setPlaceRequest] = useState(["lodging"]);
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
    }
  };

  return (
    <>
      <div className={clsx("h-[600px]", "flex justify-between gap-4", "mt-4")}>
        <div className={clsx("w-3/4")}>
          <GoogleMapPlaces
            mapId={mapId}
            ubicationsUser={ubicationsUser}
            ubicationMap={ubicationMap}
            placeRequest={placeRequest}
            handleClickMarker={handleClickMarker}
          />
        </div>
        <aside className={clsx("bg-primary/10", "w-1/4", "rounded-xl", "p-2")}>
          <div
            className={clsx(
              "h-full",
              "flex flex-col items-center justify-between",
              "rounded-xl",
              "border-2"
            )}
          >
            <div className="mt-10 px-2">
              <h3 className={clsx("font-semibold text-lg text-primary")}>
                {data?.title}
              </h3>
              <span className={clsx("font-medium text-sm text-accent2")}>
                {data?.locationEvent}
              </span>
              <div className={clsx("flex flex-col flex-wrap", "mt-2")}>
                <span
                  className={clsx(
                    "text-sm font-semibold",
                    "text-center",
                    "my-4"
                  )}
                >
                  Listado de opciones
                </span>

                <div className={clsx("flex flex-col")}>
                  {placesOfInterestMenu.map((itemPlace) => (
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
                          "text-sm text-azulGris900",
                          "ml-4 mb-2",
                          placeRequest === itemPlace.typePlace &&
                            "text-primary font-semibold"
                        )}
                      >
                        {itemPlace.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={clsx("flex", "w-full m-1")}>
              {ubicationsUser.length > 1 && (
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
        </aside>
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
