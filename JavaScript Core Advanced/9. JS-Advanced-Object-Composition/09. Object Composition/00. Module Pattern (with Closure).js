let module = (function() {
    let count = 0; // private
    return {
        increase: (num) => count += num,
        decrease: (num) => count -= num,
        value: () => count,
    };
})();
console.log(module.value()); // 0
console.log(module.increase(5)); // 5
console.log(module.decrease(2)); // 3
console.log(module.count); // undefined (not accessible)