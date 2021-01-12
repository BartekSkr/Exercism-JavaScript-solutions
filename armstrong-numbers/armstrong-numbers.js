export const validate = input => {
  const str = input.toString();

  if (str.length === 1) {
    return true;
  }

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(str[i], str.length);
  }

  return sum === input;
};
