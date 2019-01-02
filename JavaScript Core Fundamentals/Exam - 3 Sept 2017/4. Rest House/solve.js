function f(availableRooms, guests) {
    let reservedRooms = new Map();
    let teaRoom = [];
    for (let room of availableRooms) {
        let freeBeds = 0;
        if (room.type === 'double-bedded') {
            freeBeds = 2;
        } else if (room.type === 'triple') {
            freeBeds = 3;
        }
        if (!reservedRooms.has(room.number)) {
            reservedRooms.set(room.number, {'free_beds': freeBeds});
        }
    }
    let interator = 0;
    for (let guest of guests) {
        let f = guest.first;
        let s = guest.second;
        for (let [room, obj] of reservedRooms) {

            if (obj['free_beds'] === 2 && f.gender !== s.gender) {
                reservedRooms.get(room)['guests'] = [{name: f.name, gender: f.gender, age: f.age}, {
                    name: s.name,
                    gender: s.gender,
                    age: s.age
                }];
                reservedRooms.get(room)['free_beds'] = 0;
                guests[interator] = null;
                break
            } else if (obj['free_beds'] === 3 && f.gender === s.gender) {
                reservedRooms.get(room)['guests'] = [{name: f.name, gender: f.gender, age: f.age}, {
                    name: s.name,
                    gender: s.gender,
                    age: s.age
                }];
                reservedRooms.get(room)['free_beds'] = 1;
                guests[interator] = null;
                break
            }
        }

        interator++;
    }

    guests = guests.filter(e => e !== null);

    interator = 0;
    for (let guest of guests) {
        let f = guest.first;
        let s = guest.second;

        for (let [room, obj] of reservedRooms) {
            if (obj.hasOwnProperty('guests')) {
                let guestsInRoom = Object.values(obj['guests']);
                let firstGuestInRoom = guestsInRoom[0];
                if ((reservedRooms.get(room)['free_beds'] === 1) && (firstGuestInRoom.gender === f.gender) && (f.gender === s.gender)) {
                    reservedRooms.get(room)['guests'].push({name: f.name, gender: f.gender, age: f.age});
                    reservedRooms.get(room)['free_beds'] = 0;
                    teaRoom.push({name: s.name, gender: s.gender, age: s.age});
                    guests[interator] = {second : {name: s.name, gender: s.gender, age: s.age}};
                }
            }

        }

        interator++;
    }

    let sortedRoom = Array.from(reservedRooms.keys()).sort((a, b) => {
        return a.localeCompare(b)
    });
    for (let r of sortedRoom) {
        console.log(`Room number: ${r}`);
        let object = reservedRooms.get(r);
        if (object.hasOwnProperty('guests')) {
            let g = object.guests.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
            for (let el of g) {
                console.log(`--Guest Name: ${el.name}`);
                console.log(`--Guest Age: ${el.age}`);
            }
        }

        console.log(`Empty beds in the room: ${object['free_beds']}`)
    }
    let teaHouseCounter = 0;
    for (let guest of guests) {
        let teaHouse = Object.values(guest);
        teaHouseCounter = teaHouse.length;
    }

    console.log(`Guests moved to the tea house: ${teaHouseCounter}`)
}


// f([{number: '206', type: 'double-bedded'},
//         {number: '206', type: 'double-bedded'},
//         {number: '311', type: 'triple'}],
//     [{
//         first: {name: 'Tanya Popova', gender: 'female', age: 24},
//         second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
//     },
//         {
//             first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
//             second: {name: 'Angel Nachev', gender: 'male', age: 22}
//         },
//         {
//             first: {name: 'Tatyana Germanova', gender: 'female', age: 23},
//             second: {name: 'Boryana Baeva', gender: 'female', age: 22}
//         }]);
//
// console.log();
//
// f([{number: '101A', type: 'double-bedded'},
//         {number: '104', type: 'triple'},
//         {number: '101B', type: 'double-bedded'},
//         {number: '102', type: 'triple'}],
//     [{
//         first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
//         second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
//     },
//         {
//             first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
//             second: {name: 'Jeko Snejev', gender: 'male', age: 18}
//         },
//         {
//             first: {name: 'Pesho Goshov', gender: 'male', age: 20},
//             second: {name: 'Gosho Peshov', gender: 'male', age: 18}
//         },
//         {
//             first: {name: 'Conor McGregor', gender: 'male', age: 29},
//             second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
//         }]);
//
// console.log();

// f([{number: "408A", type: "double-bedded"},
//         {number: "405A", type: "double-bedded"}],
//     [{first: {name: "Ora Wilkerson", gender: "female", age: 57}, second: {name: "Melody Gill", gender: "female", age: 53}},
//         {   first: {name: "Valerie French", gender: "female", age: 68},
//             second: {name: "Merle Jenkins", gender: "male", age: 62}}]);

console.log();

f([ {number:"428",type:"triple"},
    {number:"161",type:"triple"},
    {number:"242",type:"double-bedded"},
    {number:"537",type:"triple"}], [
    {first:{name:"Nina Diaz",gender:"female",age:29},second:{name:"Carol Hansen",gender:"female",age:6}},
    {first:{name:"Georgia Thomas",gender:"female",age:38},second:{name:"Freddie Harmon",gender:"male",age:46}},
    {first:{name:"Freddie Harmon",gender:"male",age:30},second:{name:"Jesus Terry",gender:"male",age:64}},
    {first:{name:"Tracy Reid",gender:"male",age:41},second:{name:"Jordan Garner",gender:"male",age:16}},
    {first:{name:"Kara Burns",gender:"female",age:7},second:{name:"Marjorie Butler",gender:"female",age:28}}
]);