export class HighScores {
  constructor(arr) {
    this.arr = arr;
  }

  get scores() {
    return this.arr;
  }

  get latest() {
    return this.arr[this.arr.length - 1];
  }

  get personalBest() {
    return this.arr.sort((b, a) => ( a - b ))[0];
  }

  get personalTopThree() {
    return this.arr.sort((b, a) => (a - b)).slice(0, 3);
  }
}
