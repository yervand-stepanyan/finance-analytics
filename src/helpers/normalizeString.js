const normalizeString = text => {
  if (typeof text === 'string' && text.length) {
    // Remove all spaces.
    const regex = /\s/g;

    return text.replace(regex, '');
  }
  return text;
};

export default normalizeString;
