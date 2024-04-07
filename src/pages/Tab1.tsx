// EventCalendar.tsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Event {
  date: Date;
  description: string;
}

const EventCalendar: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventDescription, setNewEventDescription] = useState<string>('');

  // Função para adicionar um evento
  const addEvent = () => {
    const newEvent: Event = { date, description: newEventDescription };
    setEvents([...events, newEvent]);
    setNewEventDescription('');
  };

  // Função para renderizar os eventos no calendário
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const event = events.find(event => event.date.toDateString() === date.toDateString());
      if (event) {
        return <p>{event.description}</p>;
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Calendário de Eventos</h1>
      <Calendar
        onChange={(value) => setDate(value as Date)}
        value={date}
        tileContent={tileContent}
      />
      <input
        type="text"
        value={newEventDescription}
        onChange={(e) => setNewEventDescription(e.target.value)}
        placeholder="Descrição do evento"
      />
      <button onClick={addEvent}>Adicionar Evento</button>
    </div>
  );
};

export default EventCalendar;