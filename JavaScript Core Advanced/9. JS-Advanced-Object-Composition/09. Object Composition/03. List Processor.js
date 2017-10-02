
function processCommands(commands) {
    let commandProcessor = (function() {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) =>
                list = list.filter(x => x != item),
            print: () => console.log(list)
        }
    })();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}
console.log(processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']));