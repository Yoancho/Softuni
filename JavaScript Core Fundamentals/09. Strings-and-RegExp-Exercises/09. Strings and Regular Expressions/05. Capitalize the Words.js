function capitalizeWord(str) {
    let result = [];
    let text = str.split(' ');
    for (let word of text) {
        let firstW = word.slice(0,1).toUpperCase();
        let contW = word.slice(1, word.length).toLowerCase()
        result.push(firstW+contW);
    }
    console.log(result.join(' '));
}
capitalizeWord('Was that Easy? tRY thIs onE for SiZe!');
