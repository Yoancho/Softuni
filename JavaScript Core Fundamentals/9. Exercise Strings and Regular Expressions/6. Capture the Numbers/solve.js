function f(str) {
    let regex = /\d+/g;
console.log(str.join('').match(regex).join(' '));
}



f([`The300`,
`What is that?`,
`I think it’s the 3rd movie.`,
`Lets watch it at 22:45`]);