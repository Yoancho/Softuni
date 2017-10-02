const fs = require('fs');

let data = {};

let validateKeyAsString = function (key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
};
let validateKeyExists = (key) => {
    if (!data.hasOwnProperty(key)) {
        throw new Error('Key could not be found');
    }
};


let put = function (key, value) {
    validateKeyAsString(key);
    if (data.hasOwnProperty(key)) {
        throw new Error('Key already exists');
    }
    data[key] = value;
    console.log(data);
};


let get = function (key) {
    validateKeyAsString(key);
    validateKeyExists(key);

    return data[key];
}
let update = (key, value) => {
    "use strict";
    validateKeyAsString(key);
    validateKeyExists(key);

    data[key] = value;
}
let deleteItem = (key) => {
    "use strict";
    validateKeyAsString(key);
    validateKeyExists(key);

    //data[key] = undefined;
    //or
    delete data[key];

};
let clear = () => {
    data = {};
};

//-------------- Sync !
let save = () => {
  let dataAsString = JSON.stringify(data);
  fs.writeFileSync('storage.dat', dataAsString);
};
let load = () => {
    let loadDataFromFile = fs.readFileSync('storage.dat', 'utf8');
    data = JSON.parse(loadDataFromFile);
};


module.exports = {
    put: put,
    get: get,
    update: update,
    deleteItem: deleteItem,
    clear: clear,
    save: save,
    load: load
};