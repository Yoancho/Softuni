function f(n) {
   console.log('<div class="chessboard">')


    for (let i = 0; i < n; i++) {
       console.log('    <div>');

        let c = (i % 2 === 0) ? 'black' : 'white';

        for (let j = 0; j < n; j++) {

            console.log(`        <span class="${c}"></span>`)


            if (c === 'black'){
                c = 'white';
            } else {
                c = 'black'
            }

        }
        console.log('   </div>');
    }
   console.log('</div>')

}




f(4)