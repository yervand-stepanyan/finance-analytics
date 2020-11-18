export const sortArray = array => {
  return [...array].sort((a, b) => a.id - b.id);
};
