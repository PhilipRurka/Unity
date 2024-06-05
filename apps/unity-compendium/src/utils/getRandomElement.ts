const getRandomElement = <T>(array: T[]): { element: T; randomIndex: number } => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return { element: array[randomIndex], randomIndex };
};

export default getRandomElement;
