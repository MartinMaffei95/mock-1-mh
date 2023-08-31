export interface DbEvent {
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
  __v: number;
  estimate?: number;
}

export interface DbEventsData {
  currentDate: string;
  events: DbEvent[];
}
