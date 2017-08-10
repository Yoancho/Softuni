function grdasToDegrees([n]) {
    let normalize = Number(n) % 400;
    normalize = normalize + 400;
    normalize = normalize % 400;
    let result = normalize * 0.9 ;
    return result;
}