import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserEventsApi } from "@/services";
import { TitleSection } from "@/components/layouts";
import { NotEvents } from "@/components/events";

export function ReviewPlans() {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await getUserEventsApi(
          session.user.id,
          session.user.accessToken
        );
        setEvents(data);
      } catch (error) {}
    };
    fetchEvents();
  }, []);

  return (
    <>
      <TitleSection title="Revisa tus planes" urlIcon="/Icono-Fecha.svg" />
      {events.length === 0 && <NotEvents title="Sin registro de planes" />}
    </>
  );
}
