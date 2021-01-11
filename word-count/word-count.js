export const countWords = sentence => {
  return sentence
    .toLowerCase()
    .match(/\b[\w']+\b/g)
    .reduce((acc, el) => {
      acc[el] = acc[el] + 1 || 1;
      return acc;
    }, {});
};
