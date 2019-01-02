function f(base, increment) {
    let height = Math.round(base / 2);
    let [stone, marble, lapis, gold] = [0, 0, 0 ,0];


    let size = base;

    for (let i = 1; i < height; i++) {
        size -= 2;
        stone += (size * size ) * increment;


        if (i % 5 === 0) {
            lapis += ((size+1)*4)*increment
        } else {
            marble += ((size+1)*4)*increment
        }


    }
    gold = (size * size) * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

f(1, 1);
console.log();
f(11, 1);
console.log();
f(11, 0.75);
console.log();
f(12, 1);
 console.log();
f(23, 0.5);