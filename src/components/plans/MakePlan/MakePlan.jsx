import clsx from "clsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getPlanEventApi } from "@/services";
import { GoogleMap } from "@/components/maps";

export async function MakePlan({ plan }) {
  const { user } = await getServerSession(authOptions);
  const { data } = await getPlanEventApi(plan, user.accessToken);

  return (
    <div
      className={clsx("h-[600px]", "flex justify-between gap-4", "mt-4 mr-6")}
    >
      <div className={clsx("w-3/4")}>
        <GoogleMap coords={data?.coordsEvent}></GoogleMap>
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
      </aside>
    </div>
  );
}
