import clsx from "clsx";
import { redirect } from "next/navigation";
import { getPlanEventApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { MakePlan } from "@/components/plans";
const MAP_ID = process.env.ID_MAP_GOOGLE;

export async function ContainerPlan({ idPlan, user }) {
  const { accessToken } = user;
  const { data: event } = await getPlanEventApi(idPlan, accessToken);
  if (!event) {
    redirect("/pdp");
  }

  return (
    <div className={clsx("mt-4 mr-6 mb-10")}>
      <TitleSection
        title="Revisa los lugares para tú plan"
        urlIcon="/location_on.svg"
      />
      <MakePlan data={event} mapId={MAP_ID} user={user} idPlan={idPlan} />
    </div>
  );
}
