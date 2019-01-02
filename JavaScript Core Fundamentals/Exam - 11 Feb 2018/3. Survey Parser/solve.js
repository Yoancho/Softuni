function f(str) {

    const surveyDataRegex = /<svg>.+?<\/svg>/gm;
    const labelRegex = /(?<=[\[]{1})[A-Za-z \-]+(?=[\]]{1})/gm;
    const surveyHeadingRegex = /(?<=<text>).+(?=[\[])/gm;
    const sectionsRegex = /<svg>.*?<cat>.*?<text>.*?\[.+\]<\/text>.*?<\/cat>.*?<cat>.*?<\/cat><\/svg>/gm;
    const ratingAndVoteRegex = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/gm;


    let surveyData = str.match(surveyDataRegex);
    if (!surveyData) {
        console.log('No survey found');
        return;
    }

    let section = str.match(sectionsRegex);
    if (!section) {
        console.log('Invalid format');
        return;
    }


    let label = str.match(labelRegex);
    let heading = str.match(surveyHeadingRegex);
    let sumOfrating = 0;
    let sumOfVote = 0;
    let ratingAndVote = str.match(ratingAndVoteRegex);

    for (let el of ratingAndVote) {
        let regex = /(?<=<val>)([0-9]+)(?=<\/val>([0-9]+))/gm;
        let exec = regex.exec(el);
        let vote = exec[2];
        let value = exec[1];
        if (value < 1 || value > 10 ||
            vote < 1 || vote > 1000000) {
            continue;
        }

        sumOfVote += +vote;
        sumOfrating += (vote * value);



    }

    let averageRating = precisionRound(sumOfrating *1.0 / sumOfVote, 2);

    console.log(`${label}: ${averageRating}`);


    function precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
}


f('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
f('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
console.log();
f('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
console.log();
f('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');