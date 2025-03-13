import EventForm from "../components/EventForm";

export const NewEventPage = () => {
  return (
    <div>
      <EventForm method="post" />
    </div>
  );
};
export default NewEventPage;
