const FILE_NAME = 'events.json';

export const saveEventsToFile = async (events: any[]) => {
  try {
    await localStorage.setItem(FILE_NAME, JSON.stringify(events));
  } catch (error) {
    console.error('Erro ao salvar eventos no arquivo:', error);
  }
};

export const loadEventsFromFile = async () => {
  try {
    const eventsString = await localStorage.getItem(FILE_NAME);
    if (eventsString) {
      return JSON.parse(eventsString);
    }
    return null;
  } catch (error) {
    console.error('Erro ao carregar eventos do arquivo:', error);
    return null;
  }
};