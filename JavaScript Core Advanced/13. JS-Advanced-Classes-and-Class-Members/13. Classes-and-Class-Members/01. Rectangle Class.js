class Rectangle {
    constructor(width, height, color) {
        [this.width, this.height, this.color] =
            [width, height, color];
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.calcArea()); // 20