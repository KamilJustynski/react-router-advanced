import EventItem from "../components/EventItem";
import { redirect, useRouteLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};
export default EventDetailPage;

export const eventsDetailLoader = async ({ params }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        messaege: "Could not fetch details for selected events!",
      }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const deleteAction = async ({ params, request }) => {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        messaege: "Could not delete event.",
      }),
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};
