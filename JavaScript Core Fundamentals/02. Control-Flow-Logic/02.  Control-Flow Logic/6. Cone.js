function coneArea([h, r]) {
   [r, h] = [r, h].map(Number);
   let s = Math.sqrt(h*h + r*r);
   let volume = Math.PI*h*h*r/3;
   console.log("volume = " + volume.toFixed(4));
   let area = Math.PI * h * (h+s);
   console.log("area = " + area.toFixed(4));
}
coneArea(['3', '5']);