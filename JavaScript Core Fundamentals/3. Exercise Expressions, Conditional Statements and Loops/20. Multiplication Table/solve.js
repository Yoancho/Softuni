function f(n) {
    console.log(`<table border="1">`);
    console.log(`   <tr>`)
    for (let x = 0; x <= n; x++) {
        if (x === 0){
            console.log(`      <th>x</th>`)
        } else {
            console.log(`      <th>${x}</th>`)
        }
    }
    console.log(`   </tr>`)
    for (let i = 1; i <= n; i++) {
        console.log(`   <tr>`)
        console.log(`      <th>${i}</th>`)

        for (let j = 1; j <= n; j++) {
            console.log(`        <td>${j*i}</td>`)
        }
        console.log(`   </tr>`)
    }
    console.log(`</table>`);
}


f(5)