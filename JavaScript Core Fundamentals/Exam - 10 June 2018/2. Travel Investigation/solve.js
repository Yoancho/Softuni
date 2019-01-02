function f(arr) {

    let valid = [];
    let invalid = [];
    
    let [companies, delimiter, ...text] = arr;
    let arrOfCompanies = companies.split(delimiter).join(' ').split(' ').filter(e => e !== '');
    for (let row of text) {

        let isValid = [];
        for (let comp of arrOfCompanies) {
            let regex = new RegExp(comp, 'gmi');

            if (regex.test(row)) {
                isValid.push(true)
            } else isValid.push(false)
        }
        if (!isValid.includes(false)) {
            valid.push(row);
        } else {
            invalid.push(row)
        }
    }
    let validPrint = false;
    if (valid.length > 0) {
        console.log('ValidSentences');
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i].toLowerCase()}`);
        }
        validPrint = true
    }


    if (invalid.length > 0) {
        if (validPrint) {
            console.log('==============================');
        }
        console.log('InvalidSentences');
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i].toLowerCase()}`);
        }
    }
}


f(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);

console.log()

f(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);