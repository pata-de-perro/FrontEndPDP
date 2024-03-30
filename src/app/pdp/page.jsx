"use client";
import { useRouter } from "next/navigation";
import { HeroAuth } from "@/components/layouts";
import { BtnPrimary } from "@/components/common";
import { ReviewPlans } from "@/components/events";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <main>
        <HeroAuth title="¡Facilitando tus planes!" urlImg="/Reminders-bro.svg">
          <p>
            Queremos que el planear tu viaje o salida sea lo más fácil posible.
            En Pata de Perro puedes guardar diferentes ubicaciones segun su
            categoría.
          </p>
          <BtnPrimary
            title="Planea un evento"
            onClick={() => router.push("/pdp/events/create")}
          />
        </HeroAuth>
        <ReviewPlans />
      </main>
    </>
  );
}
