function f(meals, commands) {

    let count = 0;

    for (let command of commands) {
        let [c, i, q] = command.split(' ').filter(e => e !== '');

        if (c === 'End') {
            break;
        }

        switch (c) {
            case 'Serve' : {
                if (meals.length === 0) {
                    console.log(`The food is gone`);
                    console.log(`Meals eaten: ${count}`);
                    return
                }
                let mealName = meals.splice(meals.length - 1, 1)
                console.log(`${mealName} served!`);
                break
            }
            case 'Add' : {
                if (i != undefined && i != '' && i != null) {
                    meals.splice(0, 0, i);
                }
                break
            }
            case 'Shift' : {
                if (meals.length === 0) {
                    console.log(`The food is gone`);
                    console.log(`Meals eaten: ${count}`);
                    return
                }
                let i1 = Number(i);
                let i2 = Number(q);
                if ((i1 >= 0 && i1 <= meals.length - 1) && (i2 >= 0 && i2 <= meals.length - 1)) {
                    let p1 = meals.splice(i1, 1, '').toString();
                    let p2 = meals.splice(i2, 1, '').toString();
                    meals.splice(i1, 1, p2);
                    meals.splice(i2, 1, p1);
                }
                break
            }
            case 'Eat' : {

                if (meals.length === 0) {
                    console.log(`The food is gone`);
                    console.log(`Meals eaten: ${count}`);
                    return
                }
                let eaten = meals.splice(0, 1);
                console.log(`${eaten} eaten`);
                count++;
                break
            }
            case 'Consume' : {
                if (meals.length === 0) {
                    console.log(`The food is gone`);
                    console.log(`Meals eaten: ${count}`);
                    return
                }
                let startIndex = Number(i);
                let endIndex = Number(q);

                if ((startIndex >= 0 && startIndex <= meals.length - 1) && (endIndex >= 0 && endIndex <= meals.length - 1)) {

                    meals.splice(startIndex, endIndex + 1);
                    console.log('Burp!');
                    count += (endIndex - startIndex) + 1;
                }
                break
            }
        }
    }
    if (meals.length > 0) {
        let toPrint = meals.filter(e => e !== '').join(', ');
        console.log(`Meals left: ${toPrint}`);
    } else {
        console.log(`The food is gone`);
    }

    console.log(`Meals eaten: ${count}`);

}


// f(['chicken', 'steak', 'eggs'],
//     ['Serve',
//         'Eat',
//         'End',
//         'Consume 0 1']);
//
// console.log();
//
// f(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
//     ['Add spaghetti',
//         'Shift 0 1',
//         'Consume 1 4',
//         'End']);
//
// console.log();
//
// f(['carrots', 'apple', 'beet'],
//     ['Consume 0 2',
//         'End',]);
//
// f(['soup', 'spaghetti', 'eggs'],
//     ['Consume 0 2', 'Eat', 'Eat', 'Shift 0 1', 'End', 'Eat']);
// console.log();
// f(['bacon', 'veggies', 'chicken'],
//     [`Add`,
//         `End`]);
// console.log();
// f(['bacon', 'veggies', 'chicken']
//     , ['Consume 2 9'
//         , 'Eat'
//         , 'End']);
console.log();
f([], ['Serve', 'Eat', 'Consume 0 0', 'Add chicken', 'Add rice', 'Eat', 'End']);