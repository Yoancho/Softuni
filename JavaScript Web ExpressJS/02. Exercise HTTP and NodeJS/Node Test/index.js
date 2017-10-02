const storage = require('./storage')

storage.put('first', 'some value')
storage.put('second', true)
storage.put('third', 5)

let someValue = storage.get('first');
console.log(someValue);
//storage.get('sdfsdg')
storage.update('first', 'another value');
let anotherValue = storage.get('first');
console.log(anotherValue);
storage.deleteItem('first');
//let deletedValue = storage.get('first');
storage.clear();
//storage.get('second')

storage.put('second', false)
storage.put('third', 28)

storage.save();

storage.clear();
storage.load();

let afterLoadValue = storage.get('second');
console.log(afterLoadValue);
