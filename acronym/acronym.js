export const parse = (phrase) => {
    return phrase.match(/([a-z]|')+/gi).reduce((acronym, word) => acronym.concat(word.charAt(0)), '').toUpperCase();
};