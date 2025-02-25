import { Task } from "@lit-labs/task";

export interface ICardsData {
  title: string;
  image: string;
  description: string;
}

// "https://jsonplaceholder.typicode.com/photos"
const url: string = "https://picsum.photos/v2/list";

export const fetchCardsTask = (context: any) => 
  new Task(context, {
  task: async (_, { signal }) => {

    const response = await fetch (url, {signal});

    if (!response.ok) {
        throw new Error("Error al obtener cards");
    }

    const cardsData = await response.json();

    return cardsData.map((card: any) => ({
        title: card.author,
        image: card.download_url,
        description: `${card.width} x ${card.height}`,
    })) as ICardsData[];
  },
  args: () => [],
});
