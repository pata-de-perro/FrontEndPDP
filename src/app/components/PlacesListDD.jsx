import clsx from "clsx";
import Image from "next/image";

export function PlacesListDD() {
  const placesList = [
    // {
    //   Hotel: "Hotel",
    //   Places: [
    //     Top1 = "Hotel1",
    //     Top2 = "Hotel2",
    //     Top3 = "Hotel3",
    //     Top4 = "Hotel4",
    //     Top5 = "Hotel5",
    //     Top6 = "Hotel6",
    //   ]
    // },
    {
      Title: "Hotel",
      Top1: "Hotel1",
      Top2: "Hotel2",
      Top3: "Hotel3",
      Top4: "Hotel4",
      Top5: "Hotel5",
      Top6: "Hotel6",
    },
    {
      Title: "Restaurantes",
      Top1: "Restaurante 1",
      Top2: "Restaurante 2",
      Top3: "Restaurante 3",
      Top4: "Restaurante 4",
      Top5: "Restaurante 5",
      Top6: "Restaurante 6",
    },
    {
      Title: "Vida Noctura",
      Top1: "Vida Nocturna 1",
      Top2: "Vida Nocturna 2",
      Top3: "Vida Nocturna 3",
      Top4: "Vida Nocturna 4",
      Top5: "Vida Nocturna 5",
      Top6: "Vida Nocturna 6",
    },
    {
      Title: "Atracciones turísticas",
      Top1: "Atraccion 1",
      Top2: "Atraccion 2",
      Top3: "Atraccion 3",
      Top4: "Atraccion 4",
      Top5: "Atraccion 5",
      Top6: "Atraccion 6",
    },
    {
      Title: "Museos y Arte",
      Top1: "Museo y Arte 1",
      Top2: "Museo y Arte 2",
      Top3: "Museo y Arte 3",
      Top4: "Museo y Arte 4",
      Top5: "Museo y Arte 5",
      Top6: "Museo y Arte 6",
    },
    {
      Title: "Actividades al aire libre",
      Top1: "Actividad 1",
      Top2: "Actividad 2",
      Top3: "Actividad 3",
      Top4: "Actividad 4",
      Top5: "Actividad 5",
      Top6: "Actividad 6",
    },
  ];

  const friends = [
    "Paco", "Sonia", "Estevan"
  ]

  return (
    <div id="placesList" className="ml-2">
      {placesList.map((item, index) => {
        return (
          <div key={index} className="collapse collapse-arrow">
            <input type="checkbox" />
            <div
              className={clsx(
                "collapse-title",
                "font-heading text-regularSemiBold text-azulGriss900",
                "mt-4",
              )}
            >
              {item.Title}
            </div>
            <div className={clsx(
                "collapse-content",
                "grid grid-cols-2",
                )}>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top1}
                </p>
              </div>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top2}
                </p>
              </div>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top3}
                </p>
              </div>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top4}
                </p>
              </div>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top5}
                </p>
              </div>
              <div className="flex items-end mt-2">
                <Image
                  src="/location_on.svg"
                  width={20}
                  height={20}
                  alt="gps pin icon"
                />
                <p className="font-body text-regular text-azulGris900">
                  {item.Top6}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}