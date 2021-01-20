export const valid = input => {
  let onlyNumbers = input.replace(/\s/g, "");

  if (input <= 1 || input.match(/[A-za-z:#$-]/g)) {
    return false;
  }

  let luhnNumber = onlyNumbers.split("").map(el => parseInt(el));

  for (let i = luhnNumber.length - 2; i >= 0; i -= 2) {
    luhnNumber[i] * 2 > 9
      ? (luhnNumber[i] = luhnNumber[i] * 2 - 9)
      : (luhnNumber[i] = luhnNumber[i] * 2);
  }

  return luhnNumber.reduce((a, b) => a + b) % 10 === 0;
};
