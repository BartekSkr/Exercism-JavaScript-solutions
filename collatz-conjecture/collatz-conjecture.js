export const steps = number => {
  let numberOfSteps = 0;
  if (number > 0) {
    while (number !== 1) {
      if (number % 2 === 0) {
        number /= 2;
        numberOfSteps += 1;
      } else {
        number = number * 3 + 1;
        numberOfSteps += 1;
      }
    }

    return numberOfSteps;
  } else {
    throw new Error("Only positive numbers are allowed");
  }
};
