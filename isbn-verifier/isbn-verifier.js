export const isValid = isbn => {
  const splitIsbn = isbn.replace(/-/g, '').split('');
  const indexOfX = splitIsbn.indexOf('X');
  const replaceX = x => x === 'X' ? 10 : x;

  if (splitIsbn.length !== 10 || (indexOfX > -1 && indexOfX < splitIsbn.length - 1)) {
    return false;
  } else {
    return splitIsbn
      .map((x, i) => replaceX(x) * (10 - i))
      .reduce((a, b) => a + b) % 11 === 0;
  }
}