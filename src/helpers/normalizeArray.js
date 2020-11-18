import { NOT_AVAILABLE } from '../globals/constants';

export const normalizeArray = array => {
  if (Array.isArray(array) && array.length) {
    return array.map(item => ({
      id: item.id || NOT_AVAILABLE,
      classification: item.classification || NOT_AVAILABLE,
      currentBalance: item.currentBalance,
      name: item.name || NOT_AVAILABLE,
      type: item.type || NOT_AVAILABLE,
    }));
  }
  return array;
};
