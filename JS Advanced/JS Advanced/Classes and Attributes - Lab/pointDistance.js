class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(pointA, pointB) {
    let distX = pointB.x - pointA.x;
    let distY = pointB.y - pointA.y;
    return Math.sqrt(distX ** 2 + distY ** 2);
  }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
