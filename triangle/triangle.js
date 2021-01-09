export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isTriangle() {
    return this.a > 0 && this.b > 0 && this.c > 0 ? true : false;
  }

  isUnequalTriangle() {
    return this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
      ? true
      : false;
  }

  isEquilateral() {
    return this.isTriangle()
      ? this.a === this.b && this.b === this.c && this.a === this.c
      : false;
  }

  isIsosceles() {
    return this.isUnequalTriangle()
      ? false
      : this.a === this.b || this.b === this.c || this.a === this.c;
  }

  isScalene() {
    return this.isUnequalTriangle()
      ? false
      : this.a !== this.b && this.b !== this.c && this.a !== this.c;
  }
}
