function f(str) {
    surveyRegex = /<svg>[\s\S]*<\/svg>/gm;
    if (surveyRegex.exec(str)) {
        let formatRegex = /<svg>[\s\S]*?<cat>[\s\S]*?<text>([\s\S]*?)\[([\s\S]+)\][\s\S]*?<\/text>[\s\S]*?<\/cat>[\s\S]*?<cat>([\s\S]+)<\/cat><\/svg>/gm;
        let exec = formatRegex.exec(str);
        if (exec) {
            let [label, ratings] = [exec[2], exec[3]];
            let ratingRegex = /<g><val>(\d{1,})<\/val>(\d{1,})<\/g>/g;
            let ratingsArray = [];
            let count = 0;

            let tmp;
            while (tmp = ratingRegex.exec(ratings)) {

                ratingsArray.push(tmp[2] * tmp[1]);
                count += Number(tmp[2]);
            }

            let sumOfRating = ratingsArray.reduce((a, b) => a + b);
            let forPrint = (sumOfRating / count).toFixed(2);

            forPrint = parseFloat(forPrint);

            console.log(`${label}: ${forPrint}`);

        } else {
            console.log('Invalid format')
        }
    } else {
        console.log('No survey found');
    }
}


f('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
f('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
console.log();
f('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
console.log();
f('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');