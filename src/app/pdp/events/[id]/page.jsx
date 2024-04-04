import { HeroAuth } from "@/components/layouts";
import { ContainerEvent } from "@/components/events";

export default async function EventPage({ params }) {
  return (
    <>
      <HeroAuth
        title="¡Verifica tú plan!"
        urlImg="/World-amico.svg"
        type="primary"
      ></HeroAuth>
      <ContainerEvent />
    </>
  );
}
