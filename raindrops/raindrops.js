export const convert = number => {
  let output = "";
  if (number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    output = number % 3 === 0 ? output.concat("Pling") : output;
    output = number % 5 === 0 ? output.concat("Plang") : output;
    output = number % 7 === 0 ? output.concat("Plong") : output;
  } else {
    output = number;
  }
  return output.toString();
};
