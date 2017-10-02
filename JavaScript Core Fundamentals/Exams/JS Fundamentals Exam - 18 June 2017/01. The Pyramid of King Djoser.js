function solve(base, increment) {
    let allStone = 0;
    let allMarble = 0;
    let allLapis = 0;
    let allGold = 1;
    let step = 1;

    let height = Math.ceil(base / 2);
    for (var i = 0; i < height; i++) {
        let stonePerRow = ((base - 2) * (base - 2)) * increment;
        let marblePerRow = ((base * 4) - 4) * increment;
        if (step % 5 == 0) {
            allLapis += marblePerRow;
        }
        if (i != height - 1 && step % 5 != 0) {
            allMarble += marblePerRow;
        }
        if (i != height - 1) {
            allStone += stonePerRow
        }
        ;
        if (i == height - 1) {
            if (marblePerRow != 0) {
                allGold *= marblePerRow;
            }
        }
        step++;
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(allStone)}`);
    console.log(`Marble required: ${Math.ceil(allMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(allLapis)}`);
    console.log(`Gold required: ${Math.ceil(allGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`)
}

solve(100,
    0.33);
