import Image from "next/image";
import clsx from "clsx";
import { placesList } from "@/mocks/catalogs";

export function PlacesListDD() {
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
                "mt-4"
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
