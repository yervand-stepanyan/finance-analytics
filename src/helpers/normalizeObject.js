const propertyToDelete = 'id';

export const normalizeObject = object => {
  if (propertyToDelete in object) {
    const newObject = { ...object };
    delete newObject[propertyToDelete];

    return newObject;
  }
  return object;
};
