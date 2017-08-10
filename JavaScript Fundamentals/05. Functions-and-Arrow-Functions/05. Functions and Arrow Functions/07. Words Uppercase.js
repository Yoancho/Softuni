function toUpper(str) {
let upper = str.toUpperCase().trim();
let words = upper.split(/\W+/);
words = words.filter(w => w != '');
let result = words.join(", ");
    console.log(result);
}
toUpper('Hi, how are you?');