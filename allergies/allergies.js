export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    let result = [];
    let num = this.score % 256;

    if (num >= 128) {
      result.push("cats");
      num -= 128;
    }
    if (num >= 64) {
      result.push("pollen");
      num -= 64;
    }
    if (num >= 32) {
      result.push("chocolate");
      num -= 32;
    }
    if (num >= 16) {
      result.push("tomatoes");
      num -= 16;
    }
    if (num >= 8) {
      result.push("strawberries");
      num -= 8;
    }
    if (num >= 4) {
      result.push("shellfish");
      num -= 4;
    }
    if (num >= 2) {
      result.push("peanuts");
      num -= 2;
    }
    if (num >= 1) {
      result.push("eggs");
      num -= 1;
    }

    return result.reverse();
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
