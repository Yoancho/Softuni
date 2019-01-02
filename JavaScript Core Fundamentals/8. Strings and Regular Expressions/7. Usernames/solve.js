function f(arr) {
    let result = [];

    for (let mail of arr) {
        let [username, rest] = mail.split('@');
        let ch = rest.split('.').map(a => a[0]);
        result.push(username+ '.' + ch.join(''));
    }
    console.log(result.join(', '));
}

f(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);