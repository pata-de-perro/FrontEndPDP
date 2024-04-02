import clsx from "clsx";
import { getPlanEventApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { MakePlan } from "@/components/plans";
const MAP_ID = process.env.ID_MAP_GOOGLE;

export async function ContainerPlan({ idPlan, user }) {
  const { data } = await getPlanEventApi(idPlan, user.accessToken);

  return (
    <div className={clsx("mt-4 mr-6")}>
      <TitleSection title="Revisa tu mapa" urlIcon="/Icono-Fecha.svg" />
      <MakePlan data={data} mapId={MAP_ID} />
    </div>
  );
}
