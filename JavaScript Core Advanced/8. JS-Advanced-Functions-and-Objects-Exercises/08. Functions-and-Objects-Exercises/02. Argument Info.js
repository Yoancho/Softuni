function result() {
    let result = {};
    for (var i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        let type = typeof(arguments[i]);
        console.log(`${type}: ${value}`);

        if(!result.hasOwnProperty(type)){
            result[type]=0;
        }
        result[type]++;
    }
    let sortedArr = [];

    for (var item in result) {
        if(result.hasOwnProperty(item)){
            var element = result[item];
            sortedArr.push([item, element]);
        }
    }

    sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1]
    });

    for (var i = 0; i < sortedArr.length; i++) {
        var element = sortedArr[i];
        let type = element[0];
        let count = element[1];

        console.log(`${type} = ${count}`);
    }

}
result('cat', 42, 402, function () { console.log('Hello world!'); });