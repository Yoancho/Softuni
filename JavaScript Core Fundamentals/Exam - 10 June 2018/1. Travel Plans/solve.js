function f(arr) {
    const specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    const average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    const clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modiing', 'Nursing'];

    let second = '';
    let third = '';

    let wallet = 0;

    for (let i = 0; i < arr.length; i++) {

        let [activity, offer] = arr[i].split(' : ');
        offer = Number(offer);

        if (specialized.includes(activity)) {

            if (second === 'specialized' && offer >= 200) {
                wallet += ((offer ) * 0.80);
                wallet += 200
                second = '';
            } else if (offer >= 200) {
                wallet += (offer * 0.80);
            }
            second = 'specialized';
        }
        if (average.includes(activity)) {

            wallet += offer;
            second = 'average';
        }
        if (clumsy.includes(activity)) {

            if (third === 'clumsy') {

                wallet += (offer * 0.9);

                second = '';
                third = '';

            } else if (second === 'clumsy') {

                wallet += (offer * 0.95);
                third = 'clumsy';

            } else {
                wallet += (offer);
                second = 'clumsy';
            }
        }
    }
    console.log(`Final sum: ${wallet.toFixed(2)}`);
    if (wallet < 1000) {
        console.log(`Mariyka need to earn ${(1000 - wallet).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Mariyka earned ${(wallet - 1000).toFixed(2)} gold more.`)
    }
}


f(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
console.log()
f(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"])


//f(['Singing : 100', 'Accounting : 100', 'Teaching : 100', 'Exam-Making : 100', 'Acting : 100', 'Writing : 100', 'Lecturing : 100', 'Modiing : 100', 'Nursing : 100'])