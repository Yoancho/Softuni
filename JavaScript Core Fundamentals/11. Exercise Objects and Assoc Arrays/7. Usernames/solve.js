
function f(arr) {
    let tmp = new Set(arr);
    arr = Array.from(tmp);
    arr.sort((a, b) => sortElements(a, b)).forEach(e => console.log(e));

    function sortElements(a, b) {
        if (b.length > a.length) {
            return -1;
        } else if (b.length < a.length) {
            return 1
        } else if (b.length === a.length) {
            if (b > a) {
                return -1
            } else if (b < a) {
                return 1
            } else {
                return 0
            }
        }
    }

}


f([`Ashton`
    , `Kutcher`
    , `Ariel`
    , `Lilly`
    , `Lilly`
    , `Lilly`
    , `Lilly`
    , `Keyden`
    , `Aizen`
    , `Billy`
    , `Braston`]);


f([`Denise`
    , `Ignatius`
    , `Iris`
    , `Isacc`
    , `Indie`
    , `Dean`
    , `Donatello`
    , `Enfuego`
    , `Benjamin`
    , `Biser`
    , `Bounty`
    , `Renard`
    , `Rot`]);