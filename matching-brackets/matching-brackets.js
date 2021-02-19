const BRACKETS = {
  '(': ')',
  '{': '}',
  '[': ']',
};

export const isPaired = str => {
  const bracketStack = [];
  for (let i of [...str]) {
    if (BRACKETS[i]) bracketStack.push(i);
    if (Object.values(BRACKETS).includes(i)) {
      if (BRACKETS[bracketStack.pop()] !== i) return false;
    }
  }
  return bracketStack.length === 0;
};