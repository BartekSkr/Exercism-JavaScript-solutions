export const isIsogram = word => {
  let seen = {};
  return word
    .toLowerCase()
    .split("")
    .every(char => {
      if (char != " " && char != "-" && seen[char] != undefined) {
        return false;
      } else {
        seen[char] = true;
        return true;
      }
    });
};
