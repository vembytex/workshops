export interface IData {
  name: string;
}

export function log(input: string): void {
  console.log(input);
}

/* Treat this function as an external api call */
export function getData(id: string): Promise<IData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: `first ${id}` }, { name: `second ${id}` }]);
    }, 400);
  });
}
