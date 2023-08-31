import { DbEvent, Event } from '../interface';

export const adaptOneEvent = (event: DbEvent): Event => {
  const adaptedEvent: Event = {
    _id: event._id,
    name: event.name,
    image: event.image,
    date: event.date,
    description: event.description,
    category: event.category,
    place: event.place,
    capacity: event.capacity,
    price: event.price,
  };
  return adaptedEvent;
};

export const adaptEvents = (events: DbEvent[]): Event[] => {
  let adaptedEvents: Event[] = [];

  events.forEach((evt) => {
    const adaptedEvent = adaptOneEvent(evt);
    adaptedEvents.push(adaptedEvent);
  });
  return adaptedEvents;
};
