function f([x1, y1, z1, x2, y2, z2]) {
    let A = {x: x1, y: y1, z: z1}
    let B = {x: x2, y: y2, z: z2}

        let distanceX = Math.pow(A.x - B.x, 2);
        let distanceY = Math.pow(A.y - B.y, 2);
        let distanceZ = Math.pow(A.z - B.z, 2);

        return Math.sqrt(distanceX + distanceY + distanceZ);

}

console.log(f([1, 1, 0, 5, 4, 0]));
console.log(f([3.5, 0, 1, 0, 2, -1]));