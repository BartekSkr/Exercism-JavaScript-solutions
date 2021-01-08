export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map(str => str.split(' ').map(num => parseInt(num)));
    this._cols = this._rows[0].map((column, index) => this._rows.map(row => row[index]));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._cols;
  }
}
