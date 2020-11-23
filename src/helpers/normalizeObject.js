const key = 'id';

export const normalizeObject = object => {
  if (key in object) {
    const newObject = { ...object };
    delete newObject[key];

    return newObject;
  }
  return object;
};
