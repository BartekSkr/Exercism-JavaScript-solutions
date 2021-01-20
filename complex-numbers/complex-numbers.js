export class ComplexNumber {
  constructor(real, imag) {
    this._real = real;
    this._imag = imag;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(complexNumber) {
    const a = this._real;
    const b = this._imag;
    const c = complexNumber.real;
    const d = complexNumber.imag;
    return new ComplexNumber(a + c, b + d);
  }

  sub(complexNumber) {
    const a = this._real;
    const b = this._imag;
    const c = complexNumber.real;
    const d = complexNumber.imag;
    return new ComplexNumber(a - c, b - d);
  }

  div(complexNumber) {
    const a = this._real;
    const b = this._imag;
    const c = complexNumber.real;
    const d = complexNumber.imag;
    return new ComplexNumber(
      (a * c + b * d) / (c * c + d * d),
      (b * c - a * d) / (c * c + d * d)
    );
  }
  mul(complexNumber) {
    const a = this._real;
    const b = this._imag;
    const c = complexNumber.real;
    const d = complexNumber.imag;
    return new ComplexNumber(a * c - b * d, b * c + a * d);
  }

  get abs() {
    const a = this._real;
    const b = this._imag;
    return Math.sqrt(a * a + b * b);
  }

  get conj() {
    const a = this._real;
    const b = this._imag;
    return new ComplexNumber(a, b ? -b : 0);
  }

  get exp() {
    const a = this._real;
    const b = this._imag;
    const expA = Math.exp(a);
    return new ComplexNumber(expA * Math.cos(b), expA * Math.sin(b));
  }
}
