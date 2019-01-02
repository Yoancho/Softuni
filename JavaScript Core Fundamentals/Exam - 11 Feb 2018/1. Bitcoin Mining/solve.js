function f(arr) {
    let leva = 0;
    let bitcoin = 0;
    let dayOfFirst = 0;

    for (let i = 1; i <= arr.length; i++) {

        let mined = (Number(arr[i - 1]) * 67.51).toFixed(2);
        if (i % 3 === 0) {
            mined = mined * 0.70;
        }
        leva += +mined;
        if (leva >= 11949.16) {
            while (leva >= 11949.16){
                bitcoin++;
                leva = leva - 11949.16;
            }
            if (dayOfFirst === 0) {
                dayOfFirst = i;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (dayOfFirst !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirst}`);
    }

    console.log(`Left money: ${leva.toFixed(2)} lv.`);
}


f(['0.05', '-200', '500']);
// f(['100', '200', '300']);
//
// console.log();
// f([50, 100]);
// console.log();
// f([3124.15, 504.212, 2511.124]);