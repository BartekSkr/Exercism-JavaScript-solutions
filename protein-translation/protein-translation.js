const codonsToAcids = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

export const translate = (rna = "") => {
  let proteins = [];

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substring(i, i + 3);
    const protein = codonsToAcids[codon];

    if (protein) {
      if (protein === "STOP") {
        break;
      } else {
        proteins.push(protein);
      }
    } else {
      throw new Error("Invalid codon");
    }
  }

  return proteins;
};
