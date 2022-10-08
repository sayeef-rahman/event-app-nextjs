import SingleEvent from "./SingleEvent";

function EventList(props) {
  const { filteredEvents } = props;
  return (
    <ul>
      {filteredEvents.map((singleEvent) => {
        return <SingleEvent key={singleEvent.id} singleEvent={singleEvent} />;
      })}
    </ul>
  );
}

export default EventList;
