const validatePassword = text => {
  if (typeof text === 'string' && text.length) {
    // Minimum 10 characters, at least one lowercase letter,
    // one uppercase letter, one numeric digit, and one special character.
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,}$/;

    return !!text.match(regex);
  }
  return text;
};

export default validatePassword;
