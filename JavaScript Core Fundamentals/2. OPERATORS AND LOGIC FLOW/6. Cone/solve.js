function f(r, h) {
let  V = (Math.PI * Math.pow(r, 2) *h)/3;
let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
let L = Math.PI*r*s;
let B = Math.PI*Math.pow(r, 2);


let area = L + B;

console.log(V);
console.log(area);
}

f(3, 5);
f(3.3, 7.8);
