import React from 'react';
import EventCard from './EventCard';

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
