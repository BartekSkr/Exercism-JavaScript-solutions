const DNA_TO_RNA_MAPPING = { G: "C", C: "G", T: "A", A: "U" };

const toRnaRegex = /[GCTA]/g;

export const toRna = dnaStrand => dnaStrand.replace(toRnaRegex, char => DNA_TO_RNA_MAPPING[char]);
