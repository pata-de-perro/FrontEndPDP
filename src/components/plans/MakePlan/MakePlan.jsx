import clsx from "clsx";
import { getPlanEventApi } from "@/services";
import { GoogleMapPlaces } from "@/components/maps";

const MAP_ID = process.env.ID_MAP_GOOGLE;

export async function MakePlan({ idPlan, user }) {
  const { data } = await getPlanEventApi(idPlan, user.accessToken);

  const optionsMap = {
    center: { lat: data?.coordsEvent[0], lng: data?.coordsEvent[1] },
    zoom: 13,
    mapId: MAP_ID,
  };

  const requestPlaces = {
    location: { lat: data?.coordsEvent[0], lng: data?.coordsEvent[1] },
    radius: "8000",
    type: ["night_club"],
  };

  return (
    <div
      className={clsx("h-[600px]", "flex justify-between gap-4", "mt-4 mr-6")}
    >
      <div className={clsx("w-3/4")}>
        <GoogleMapPlaces
          optionsMap={optionsMap}
          requestPlaces={requestPlaces}
        />
      </div>
      <aside
        className={clsx(
          "bg-primary/10",
          "w-1/4",
          "rounded-xl",
          "p-4",
          "relative"
        )}
      >
        <h3 className={clsx("font-semibold text-lg text-primary")}>
          {data?.title}
        </h3>
        <span className={clsx("font-medium text-sm text-accent2")}>
          {data?.locationEvent}
        </span>
        <div className={clsx("flex flex-col flex-wrap")}>
          <span className={clsx("text-sm", "text-center", "my-4")}>
            Listado de lugares
          </span>

          <div className={clsx("flex items-center")}>
            <img
              src="/location_pdp.svg"
              alt="gps pin icon"
              className="h-12 w-auto"
            />
            <span className={clsx("text-sm text-azulGris900", "ml-4 mb-2")}>
              Club Nocturno
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
