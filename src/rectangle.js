class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }

  get length() {
    return this._length;
  }

  get width() {
    return this._width;
  }

  set length(value) {
    if (value <= 0) {
      throw new Error("Length must be a positive number");
    }
    this._length = value;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error("Width must be a positive number");
    }
    this._width = value;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }

  toString() {
    return `A rectangle with length ${this.length} and width ${this.width}`;
  }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.toString());
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
