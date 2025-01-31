import EventItem from "../components/EventItem";
import { useLoaderData } from "react-router-dom";
const EventDetailPage = () => {
  const data = useLoaderData();

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
