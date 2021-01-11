export const classify = number => {
  let aliquotSum = 0;

  if (number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  } else {
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        aliquotSum += i;
      }
    }

    if (aliquotSum < number) {
      return "deficient";
    }
    if (aliquotSum === number) {
      return "perfect";
    }
    if (aliquotSum > number) {
      return "abundant";
    }
  }
};
