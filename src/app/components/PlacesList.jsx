import clsx from "clsx";
import Image from "next/image";

export function PlacesList() {
  const placesList = [
    {
      Title: "Hotel",
      List: ["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4", "Hotel 5", "Hotel 6"],
    },
    {
      Title: "Restaurantes",
      List: [
        "Restaurante 1", "Restaurante 2", "Restaurante 3", "Restaurante 4", "Restaurante 5", "Restaurante 6",],
    },
    {
      Title: "Vida Noctura",
      List: [
        "Vida Noctura 1",
        "Vida Noctura 2",
        "Vida Noctura 3",
        "Vida Noctura 4",
        "Vida Noctura 5",
        "Vida Noctura 6",
      ],
    },
    {
      Title: "Atracciones turísticas",
      List: [
        "Atracciones turísticas 1",
        "Atracciones turísticas 2",
        "Atracciones turísticas 3",
        "Atracciones turísticas 4",
        "Atracciones turísticas 5",
        "Atracciones turísticas 6",
      ],
    },
    {
      Title: "Museos y Arte",
      List: [
        "Museos y Arte 1",
        "Museos y Arte 2",
        "Museos y Arte 3",
        "Museos y Arte 4",
        "Museos y Arte 5",
        "Museos y Arte 6",
      ],
    },
    {
      Title: "Actividades al aire libre",
      List: [
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
      {placesList.map((item, index) => {
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
      })}
    </div>
  );
}