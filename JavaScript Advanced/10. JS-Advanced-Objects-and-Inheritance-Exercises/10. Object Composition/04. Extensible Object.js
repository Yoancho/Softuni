function getExtesibleObject() {
    let obj = {
        extend: function (template) {
            for (var key in template) {
                if(template.hasOwnProperty(key)){
                    var element = template[key];
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element
                    }
                }
            }
        }
    }

    return obj;
}

let myObj = getExtesibleObject()
let template = {
    extensionMethod: function () {
        console.log('Stamat')
    },
    extensionProp: 'Penka'
}
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);  //console.log(Object.getPrototypeOf())