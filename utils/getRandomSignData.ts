
export const getRandomSignData = (data: any[]) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}