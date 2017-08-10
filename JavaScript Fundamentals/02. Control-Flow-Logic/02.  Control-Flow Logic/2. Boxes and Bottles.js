function boxes([bottles, boxCapacity]) {
    let result = Math.ceil( Number(bottles) / Number(boxCapacity));
    console.log(result);
}
boxes([22,6]);