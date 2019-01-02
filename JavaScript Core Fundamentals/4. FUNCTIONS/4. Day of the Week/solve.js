function f(d) {
    d = d.toLowerCase();

        const days = {
            sunday: 0,
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6
        };

        if (days.hasOwnProperty(d)){
            console.log(days[d]);
        } else {
            console.log('error');
        }
}

f('Monday');
f('Friday');
f('FriDAy');
f('fdhhdgs');
f('SUNDAY');