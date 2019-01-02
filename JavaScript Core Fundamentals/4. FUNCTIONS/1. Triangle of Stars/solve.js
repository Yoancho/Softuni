function f(n) {
    for (var i = 1; i <= n; i++) {
                console.log('*'.repeat(i))
    }
    for (var i = n-1; i > 0; i--) {
        console.log('*'.repeat(i))
    }
}

f(2);
f(5);
f(1);