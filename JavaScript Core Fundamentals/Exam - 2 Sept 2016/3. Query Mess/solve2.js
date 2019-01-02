function f(arr) {
    for (let row of arr) {
        let result = {};

        let rowElements = row.split(/[&\?]+/);
        for (let element of rowElements) {
            if (element.indexOf("=") != -1) {
                let subelement = element.split("=").filter(e => e != '');
                let key = subelement[0];
                let value = subelement[1];

                key = key.replace(/^\++/g, "").replace(/\++$/g, "").replace(/^(%20)+/g, "").replace(/(%20)+$/g, "");
                value = value.replace(/^\++/g, "").replace(/\++$/g, "").replace(/^(%20)+/g, "").replace(/(%20)+$/g, "");

                if (!result.hasOwnProperty(key)) {
                    result[key] = [];
                }
                result[key].push(value);
            }
        }

        for (let i of Array.from(Object.keys(result))) {
            let r1 = /\++/g;
            let r2 = /(%20)+/g;
            let r3 = /\s+/g;

            if (r1.exec(i) || r2.exec(i) || r3.exec(i)) {
                let newVal = i.replace(/\++/g, " ").replace(/(%20)+/g, " ").replace(/\s+/g, " ");
                result[newVal] = result[i];
                delete  result[i];
            }
        }
        let keys = Object.keys(result);
        for (let key of keys) {
            for (let i in result[key]) {
                result[key][i] = result[key][i].replace(/\++/g, " ").replace(/(%20)+/g, " ").replace(/\s+/g, " ");
            }
        }

        let outputText = "";
        Object.keys(result).forEach(k => outputText += `${k}=[${result[k].join(", ")}]`);
        console.log(outputText);
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