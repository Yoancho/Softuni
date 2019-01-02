function f(w, h, W, H) {
    let p1 = w*h;
    let p2 = W*H;
    let dif = Math.min(w,W) * Math.min(h,H);
    console.log((p1+p2)-dif);
}

f(2, 4, 5, 3);