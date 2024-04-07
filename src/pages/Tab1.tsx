// EventList.tsx

import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { saveEventsToFile, loadEventsFromFile } from './fileUtils'; // Funções para salvar e carregar eventos em um arquivo

interface Event {
  id: number;
  title: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEventTitle, setNewEventTitle] = useState<string>('');

  // Carregar eventos do arquivo quando o componente for montado
  useEffect(() => {
    const loadEvents = async () => {
      const loadedEvents = await loadEventsFromFile();
      if (loadedEvents) {
        setEvents(loadedEvents);
      }
    };
    loadEvents();
  }, []);

  // Função para adicionar um evento
  const addEvent = () => {
    const newEvent: Event = { id: Date.now(), title: newEventTitle };
    setEvents([...events, newEvent]);
    setNewEventTitle('');
    saveEventsToFile([...events, newEvent]); // Salvar eventos atualizados no arquivo
  };

  return (
    <div>
      <h1>Lista de Eventos</h1>
      <IonList>
        {events.map(event => (
          <IonItem key={event.id}>
            <IonLabel>{event.title}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInput
        value={newEventTitle}
        placeholder="Digite o título do evento"
        onIonChange={(e) => setNewEventTitle(e.detail.value!)}
      />
      <IonButton onClick={addEvent}>Adicionar Evento</IonButton>
    </div>
  );
};

export default EventList;