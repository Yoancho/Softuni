function f(str) {
    const regex = /\W/;

    let result = str.split(regex).filter(word => word != '').join(', ').toUpperCase();
    console.log(result)
}


f('Hi, how are you?')
f('Hi, how are you? ! DFASGgdsf !!! and sdfg :;');