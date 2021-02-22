export class translator {
  static vowels = /^[aeiou]/i
  static xAndY = /^[x|y][^aeiou]+/i
  static consonants = /(^s?qu)|(^y(?=[aeiou]))|(^[^aeiouy]+)/gi

  static transformWord(word) {
    const { vowels, xAndY, consonants } = translator
    if (vowels.test(word) || xAndY.test(word)) return `${word}ay`
    const [start] = word.match(consonants)
    return `${word.substring(start.length)}${start}ay`
  }

  static translate(words) {
    const arr = words.split(/\s+/)
    return arr.map(x => translator.transformWord(x)).join(' ')
  }
}
