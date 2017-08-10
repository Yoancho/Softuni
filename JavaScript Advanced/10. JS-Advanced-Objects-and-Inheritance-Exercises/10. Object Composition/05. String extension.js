(function solve() {
    String.prototype.ensureStart = function (s) {
        let result = str ;
        if(!str.includes(s)){
            result = s + str;
        }
        return result;
    }
    String.prototype.ensureEnd = function (s) {
        let result = str;
        if(!str.includes(s)){
            result = str + s;
        }
        return result;
    }
    String.prototype.isEmpty = function (s) {
        if(str.length == 0){
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        let lastSpace = str.lastIndexOf(' ');
        let result;
        if(n > str.length){
            return str;
        } else if(n<str.length && lastSpace != -1){
            if(lastSpace <= n && n < str.length){
                result = str.slice(0,lastSpace)+ '...';
                return result;
            }
        } else if(lastSpace === -1 && n>= 4){
            let end = n-3;
            let temp = str.slice(0, end);
            return temp + '...' ;
        } else if(n<4){
            return '.'.repeat(n);
        }
    }
    String.format = function (string, ...params) {

        for (var i = 0; i < params.length; i++) {
            string = string.replace(/\{\d\}/, params[i]);
        }
        return string;
    }

})();

let str = 'my string'
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}', 'dog'));