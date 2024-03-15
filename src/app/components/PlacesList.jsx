import clsx from "clsx";
import Image from "next/image";

export function PlacesListNDD() {

  const placesList = [
    {
        hotel: "Hotel",
      hotelList: ["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4", "Hotel 5", "Hotel 6"],
    },
    {
        rest: "Restaurantes",
      restList: [
        "Restaurante 1", "Restaurante 2", "Restaurante 3", "Restaurante 4", "Restaurante 5", "Restaurante 6",],
    },
    {
        nightLife: "Vida Noctura",
      nightLifeList: [
        "Vida Noctura 1",
        "Vida Noctura 2",
        "Vida Noctura 3",
        "Vida Noctura 4",
        "Vida Noctura 5",
        "Vida Noctura 6",
      ],
    },
    {
        turistic: "Atracciones turísticas",
      turisticList: [
        "Atracciones turísticas 1",
        "Atracciones turísticas 2",
        "Atracciones turísticas 3",
        "Atracciones turísticas 4",
        "Atracciones turísticas 5",
        "Atracciones turísticas 6",
      ],
    },
    {
        museums: "Museos y Arte",
      museumsList: [
        "Museos y Arte 1",
        "Museos y Arte 2",
        "Museos y Arte 3",
        "Museos y Arte 4",
        "Museos y Arte 5",
        "Museos y Arte 6",
      ],
    },
    {
      openAir: "Actividades al aire libre",
      openAirList: [
        "Actividades al aire libre 1",
        "Actividades al aire libre 2",
        "Actividades al aire libre 3",
        "Actividades al aire libre 4",
        "Actividades al aire libre 5",
        "Actividades al aire libre 6",
      ],
    },
  ];

  return (
    <div id="placesList">
      <div
        className={clsx(
          "font-heading text-regularSemiBold text-azulGriss900 mt-4"
        )}>Hoteles</div>
        {placesList.HotelList.amp((item, index) )>{
          return(
            <div key={index}>
            <img
            src="/location_on.svg"
            width={20}
            height={20}
            alt="gps pin icon"
          />
            <p
              className={clsx(
                "collapse-title",
                "font-heading text-regularSemiBold text-azulGriss900 mt-4"
              )}
            >
              {item.List}
            </p>
          )
        }}
      {/* {placesList.map((item, index) => {
        return (
          <div key={index} className="collapse collapse-arrow">
            <input type="checkbox" />
            <div
              className={clsx(
                "collapse-title",
                "font-heading text-regularSemiBold text-azulGriss900 mt-4"
              )}
            >
              {item.Title}
            </div>
            <div className={clsx("collapse-content", "grid grid-cols-2")}>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.List}
                </p>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}