function solve(obj) {
    if(obj.handsShaking) {
        let w = obj.weight;
        let exp = obj.experience;
        let BAL = obj.bloodAlcoholLevel;
        obj.handsShaking = false;
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience;

    }
    return obj;
}
solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true });
solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true });