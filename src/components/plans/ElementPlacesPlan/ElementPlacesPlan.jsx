import clsx from "clsx";

export function ElementPlacesPlan({ data, handleAddUbicationToEvent }) {
  return (
    <div className={clsx("flex flex-col")}>
      {data?.photos && (
        <div className="h-96 carousel carousel-vertical rounded-box">
          {data.photos.map((photo, index) => (
            <div key={index} className="carousel-item h-full">
              <img src={photo} alt={`Photo ${index}`} className="rounded-lg" />
            </div>
          ))}
        </div>
      )}
      <div className={clsx("flex flex-col", "mt-2 pb-2", "border-b-2")}>
        {data?.rating && (
          <div className={clsx("flex flex-row items-center gap-3", "text-xs")}>
            <div className={clsx("flex items-center gap-1")}>
              <span className="text-primary font-semibold">{data.rating}</span>
              <div className="rating rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="bg-primary mask mask-star-2"
                />
              </div>
            </div>
            <div className="flex gap-1">
              <span className="font-medium">{data.user_ratings_total} </span>
              <p>reseñas</p>
            </div>
          </div>
        )}
        <div className={clsx("flex items-center gap-3", "mt-4")}>
          <div
            className={clsx(
              "flex items-center justify-center",
              "h-10 w-10",
              "bg-accent1",
              "rounded-full",
              "ml-1"
            )}
          >
            <img src={data.icon} alt="icon" className={clsx("h-5 w-5")} />
          </div>
          <div>
            <h4>{data.name}</h4>
            <p className="text-sm font-light">{data.vicinity}</p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "flex flex-col gap-1",
          "mt-4 pb-2",
          "text-xs",
          "border-b-2"
        )}
      >
        {data?.contact?.phone && (
          <div className="flex gap-2">
            <span>Telefono:</span>
            <p>{data.contact.phone}</p>
          </div>
        )}
        {data?.contact?.web && (
          <div className="flex gap-2">
            <span>Sitio web:</span>
            <a
              href={data.contact.web}
              target="_blank"
              className={clsx(
                "text-accent2 font-medium",
                "hover:text-accent2/95"
              )}
            >
              {data.contact.web}
            </a>
          </div>
        )}
        <div className="flex gap-2">
          <span>Dirección:</span>
          <p>{data.contact.address}</p>
        </div>
      </div>
      <div className={clsx("flex items-end", "mt-20")}>
        <button
          className={clsx(
            "btn btn-block",
            "bg-accent1 ",
            "hover:bg-accent1/80 hover:text-accent2/80"
          )}
          onClick={() => handleAddUbicationToEvent(data)}
        >
          Agregar ubicación
        </button>
      </div>
    </div>
  );
}
