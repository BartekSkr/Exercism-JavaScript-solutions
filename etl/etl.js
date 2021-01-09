export const transform = old => {
  let expected = {};

  for (let key in old) {
    for (let i = 0; i < old[key].length; i++) {
      let k = old[key][i].toLowerCase();
      expected[k] = parseInt(key);
    }
  }
  return expected;
};
