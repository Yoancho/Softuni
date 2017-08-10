function printWithDelimeter(arr) {

    let separator = arr.pop();
    console.log(arr.join(separator));
}
printWithDelimeter(['One', 'Two', 'Three', 'Four', 'Five','-' ]);