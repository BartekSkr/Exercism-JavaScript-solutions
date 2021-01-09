export const compute = (dna1, dna2) => {
  if (dna1 === "" && dna2 === "") {
    return 0;
  }
  if (dna1 === "") {
    throw new Error("left strand must not be empty");
  }
  if (dna2 === "") {
    throw new Error("right strand must not be empty");
  }
  if (dna1.length !== dna2.length) {
    throw new Error("left and right strands must be of equal length");
  }

  var hammingDistance;
  dna1 = dna1.split("");
  dna2 = dna2.split("");
  hammingDistance = dna1.filter((element, index) => element !== dna2[index])
    .length;

  return hammingDistance;
};
