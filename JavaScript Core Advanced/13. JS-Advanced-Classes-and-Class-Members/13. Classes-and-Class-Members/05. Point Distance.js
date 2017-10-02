class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const distanceX = a.x - b.x;
        const distanceY = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
let p3 = new Point(0, 0);
let p4 = new Point(1, 1);
console.log(Point.distance(p1, p2));
console.log(Point.distance(p3, p1));
console.log(Point.distance(p3, p2));
console.log(Point.distance(p3, p4));