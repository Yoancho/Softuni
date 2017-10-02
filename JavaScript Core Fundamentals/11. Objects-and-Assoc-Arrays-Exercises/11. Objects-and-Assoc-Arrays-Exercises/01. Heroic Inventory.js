function createRegister(arr) {
    let  heroData =[];
    for (var i = 0; i < arr.length; i++) {
        let currentHeroArguments = arr[i].split(' / ');

        let currHeroName = currentHeroArguments[0];
        let currHeroLevel = Number(currentHeroArguments[1]);
        let currHeroItems = currentHeroArguments[2].split(", ");
        let hero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}
createRegister(['Isacc / 25 / Apple, GravityGun',
               'Derek / 12 / BarrelVest, DestructionSword',
               'Hes / 1 / Desolator, Sentinel, Antara']);