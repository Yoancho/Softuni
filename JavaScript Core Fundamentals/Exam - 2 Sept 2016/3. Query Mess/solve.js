function f(arr) {

    //r1 = /\w+=[\w*-. ]+/gm;
    r1 = /\w+\s*=\s*[\w*-. ]+/gm;
    for (let row of arr) {
        row = row.split('$').filter(e => e != '');
        for (let rowElement of row) {
            rowElement = rowElement.replace(/\++/gm, (match) => ' ').replace(/\%20+/gm, (match) => ' ').replace(/ +/gm, (match) => ' ');

            let [key, value] = rowElement.split('=');
           // key = key.replace(/^\++/g, "").replace(/\++$/g, "").replace(/^(%20)+/g, "").replace(/(%20)+$/g, "");
           // value = value.replace(/^\++/g, "").replace(/\++$/g, "").replace(/^(%20)+/g, "").replace(/(%20)+$/g, "");
            let m;
            if (key === 'url') {
                console.log(`${key}=[${value}]`);
            } else {
                m = rowElement.match(r1);
                let result = new Map();

                for (let match of m) {
                    if (match !== undefined) {
                        let [k, v] = match.split('=').filter(e => e != '').map(e => e.trim());
                        if (!result.has(k)) {
                            result.set(k, []);
                            result.get(k).push(v.trim())
                        } else if (result.has(k)) {
                            result.get(k).push(v.trim());
                        }
                    }
                }
                let r = '';
                for (let [key, value] of result) {
                    key = key.trim();
                    r += `${key}=[${value.join(', ')}]`;
                }
                console.log(r);
            }
        }
    }
}


f([`login=student&password=student`]);
console.log();
f([`field=value1&field=value2&field=value3`,
    `http://example.com/over/there?name=ferret`]);
console.log();
f([`foo=%20foo&value=+val&foo+=5+%20+203`,
    `foo=poo%20&value=valley&dog=wow+`,
    `url=https://softuni.bg/trainings/coursesinstances/details/1070`,
    `https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php`]);