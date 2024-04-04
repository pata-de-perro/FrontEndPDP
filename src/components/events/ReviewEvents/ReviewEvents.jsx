import clsx from "clsx";
import { getUserEventsApi } from "@/services";
import { TitleSection } from "@/components/layouts";

export async function ReviewEvents({ user }) {
  const { id, accessToken } = user;
  const { data: events } = await getUserEventsApi(id, accessToken);

  return (
    <div className={clsx("mt-10 mr-4")}>
      <TitleSection
        title="Revisa tus viajes y/o salidas"
        urlIcon="/Icono-Fecha.svg"
      />
    </div>
  );
}
