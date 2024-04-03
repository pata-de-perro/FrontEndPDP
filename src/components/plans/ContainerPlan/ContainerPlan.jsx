import clsx from "clsx";
import { redirect } from "next/navigation";
import { getPlanEventApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { MakePlan } from "@/components/plans";
const MAP_ID = process.env.ID_MAP_GOOGLE;
import { FaRegMap } from "react-icons/fa";

export async function ContainerPlan({ idPlan, user }) {
  const { accessToken } = user;
  const { data: event } = await getPlanEventApi(idPlan, accessToken);
  if (!event) {
    redirect("/pdp");
  }

  return (
    <div className={clsx("mt-4 mr-6")}>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <MakePlan data={event} mapId={MAP_ID} user={user} idPlan={idPlan} />
    </div>
  );
}
