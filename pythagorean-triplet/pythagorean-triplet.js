export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2);
  }

  static where({ sum = 0, minFactor = 1, maxFactor = 1 }) {
    let result = [];
    for (let a = minFactor; a <= maxFactor; a++)
      for (let b = a; b <= maxFactor; b++)
        for (let c = a; c <= maxFactor; c++) {
          if (new Triplet(a, b, c).isPythagorean()) {
            result.push(new Triplet(a, b, c));
          }
        }
    return sum === 0
      ? result
      : result.filter(
          el => Object.values(el).reduce((acc, el2) => acc + el2) === sum
        );
  }
}
