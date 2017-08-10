let extensible = (function () {
    let id = 0;
    return class Extensible {
        constructor(){
            this.id = id++;
        }
        extend(template){
            for (let prop in template) {
                if(typeof template[prop] === 'function'){
                    Extensible.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
})()

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);