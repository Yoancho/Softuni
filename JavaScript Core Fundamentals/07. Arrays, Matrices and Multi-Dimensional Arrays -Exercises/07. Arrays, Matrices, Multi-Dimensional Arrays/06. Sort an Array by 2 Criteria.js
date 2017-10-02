function order(arr) {
    console.log(arr.sort(compare).join('\n'));
    function compare(a, b) {
        if(a.length < b.length){
            return -1;
        } else if(a.length > b.length){
            return 1;
        } else {
            if(a < b){
                return -1;
            } else if(a > b){
                return 1;
            } else {
                return 0;
            }
        }
    }
}
//order(['Isacc','Theodor','Jack','Harrison','George']);
order(['alpha', 'beta', 'gamma']);