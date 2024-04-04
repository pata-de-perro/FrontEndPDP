import clsx from "clsx";
import { TitleSection } from "@/components/layouts";

export function ContainerEvent({ event }) {
  return (
    <div className={clsx("mt-4 mr-6")}>
      <TitleSection
        title="Revisa tu lugares elejidos"
        urlIcon="/location_on.svg"
      />
    </div>
  );
}
