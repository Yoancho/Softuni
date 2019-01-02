function f(n) {
    console.log('<ul>');
    for (let i = 1; i <= Number(n); i++) {
        let color = '';
        if (i % 2 === 1){
            color = 'green';
        } else {
            color = 'blue'
        }
        console.log(`   <li><span style='color:${color}'>${i}</span></li>`);

    }
    console.log('</ul>');

}

f(10);