let revModule = (function() {
    let count = 0; // private
    function change(amount) { return count += amount; }
    function increase(num) { return change(num); }
    function decrease(num) { return change(-num); }
    function value() { return count; }
    return { increase, decrease, value };
})();
console.log(revModule.value()); // 0
console.log(revModule.increase(5)); // 5
console.log(revModule.decrease(2)); // 3
console.log(module.count); // undefined (not accessible);