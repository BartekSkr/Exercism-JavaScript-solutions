export const primeFactors = number => {
  let primeFactors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      primeFactors.push(i);
      number /= i;
    }
  }

  return primeFactors;
};
