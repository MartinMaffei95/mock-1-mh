export interface Event {
  _id: string;
  name: string;
  image: string;
  date: string;
  description: string;
  category: string;
  place: string;
  capacity: number;
  assistance?: number;
  price: number;
  estimate?: number;
}

export interface EventsData {
  currentDate: string;
  events: Event[];
}
