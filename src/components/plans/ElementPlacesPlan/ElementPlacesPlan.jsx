import clsx from "clsx";

export function ElementPlacesPlan({ data }) {
  const stars = Math.floor(data.rating);

  return (
    <div className={clsx("flex flex-col")}>
      <div className="rating flex gap-2 pb-3">
        <span>{stars} </span>
        <input
          type="radio"
          name="rating-2"
          className={clsx("mask mask-star-2 bg-orange-400")}
        />
      </div>
      <span>{data.vicinity}</span>
    </div>
  );
}
