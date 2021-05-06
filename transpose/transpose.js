export const transpose = arr => {
  let result = []

  arr.forEach((word, wordIndex) => {
    word.split('').forEach((letter, letterIndex) => {
      if (!result[letterIndex]) result[letterIndex] = []

      for (let i = result[letterIndex].length; i < wordIndex; i++) {
        result[letterIndex][i] = ' '
      }
      result[letterIndex][wordIndex] = word[letterIndex]
    })
  })
  return result.map(row => row.join(''))
};
