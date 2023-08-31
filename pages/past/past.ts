import { createCardTemplate } from '../../src/components/EventCard/eventCard.js';
import { events } from '../../db/events.db.js';

export const render = () => {
  const card_container = document.querySelector('#cards-container');

  const fragment = document.createDocumentFragment();
  if (!card_container) return;

  for (let i = 0; i < events.events.length; i++) {
    const event = events.events[i];
    const todayDate = new Date(events.currentDate);
    const eventDate = new Date(event.date);
    if (eventDate.getTime() < todayDate.getTime()) {
      const config = {
        title: event.name,
        description: event.description,
        image: event.image,
        price: `${event.price}`,
        url: event._id,
      };

      const cardTemplate = createCardTemplate(config);

      const cardElement = document.createElement('div');
      cardElement.className =
        'md:basis-[30%] flex flex-col bg-neutral-100 shadow-md rounded-md overflow-hidden w-full';

      cardElement.innerHTML = cardTemplate;
      card_container.appendChild(cardElement);
    }
  }
};
render();
