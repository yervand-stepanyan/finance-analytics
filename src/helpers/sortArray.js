export const sortArray = array => {
  if (Array.isArray(array) && array.length) {
    return [...array].sort((a, b) => a.id - b.id);
  }
  return array;
};
