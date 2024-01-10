import React from 'react';

function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.name.text}</h3> {/* Adjust according to the event data structure */}
      <p>{event.description.text}</p> {/* Adjust according to the event data structure */}
      {/* Add more event details here */}
    </div>
  );
}

export default EventCard;
