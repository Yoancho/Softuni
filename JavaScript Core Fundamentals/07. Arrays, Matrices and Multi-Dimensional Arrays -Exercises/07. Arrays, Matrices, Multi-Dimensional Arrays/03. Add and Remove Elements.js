function addRemove(commands) {
    //commands = commands.split(`\n`);
    let result = [];
    for (let comm in commands) {
        let index = Number(comm)+1;
        if(commands[comm] == 'add'){
            result.push(index);
        }
        else if(commands[comm] == 'remove'){
            result.pop();
        }

    }
    if (result.length == 0){
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }
}