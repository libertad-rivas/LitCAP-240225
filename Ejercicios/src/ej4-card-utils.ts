import { Task } from "@lit-labs/task";

export interface ICardsData {
  title: string;
  image: string;
  description: string;
}

// const API_URL: string ="https://jsonplaceholder.typicode.com/photos"
const API_URL: string = "https://picsum.photos/v2/list";
// const API_KEY: string = "b798737f6091a921052fb5e7ce96f76ae25a2c1e";

export const fetchCardsTask = (context: any) => 
  new Task(context, {
  task: async (_, { signal }) => {

    const response = await fetch (API_URL, {signal});

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
