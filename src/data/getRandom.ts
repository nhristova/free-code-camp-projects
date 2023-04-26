export const getRandom = (collection: any[]) => {
  const i = Math.floor(Math.random() * collection.length);
  return collection[i];
};
