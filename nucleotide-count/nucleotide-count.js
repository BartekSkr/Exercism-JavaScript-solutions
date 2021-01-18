export class NucleotideCounts {
  static parse(dna) {
    if (/[^ACGT]/g.test(dna)) {
      throw new Error("Invalid nucleotide in strand");
    } else {
      const a = [...dna].reduce((acc, el) => (el === "A" ? acc + 1 : acc), 0);
      const c = [...dna].reduce((acc, el) => (el === "C" ? acc + 1 : acc), 0);
      const g = [...dna].reduce((acc, el) => (el === "G" ? acc + 1 : acc), 0);
      const t = [...dna].reduce((acc, el) => (el === "T" ? acc + 1 : acc), 0);
      return `${a} ${c} ${g} ${t}`;
    }
  }
}
