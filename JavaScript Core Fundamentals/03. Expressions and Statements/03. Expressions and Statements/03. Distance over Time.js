function distance([v1, v2, time]) {
    [v1, v2, time] = [v1, v2, time].map(Number);
    let t = time / 3600;
    let S1 = v1 * t;
    let S2 = v2 * t;
    let result = Math.abs(S1 - S2) * 1000;
    return result;
}