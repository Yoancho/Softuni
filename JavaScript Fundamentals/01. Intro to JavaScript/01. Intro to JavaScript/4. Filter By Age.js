function filterByAge([minAge, nameA, ageA, nameB, ageB ]) {
    let PersonaA = {name: nameA, age: Number(ageA)};
    let PersonaB = {name: nameB, age: Number(ageB)};
    if(PersonaA.age >= minAge) console.log(PersonaA);
    if(PersonaB.age >= minAge) console.log(PersonaB);
}
filterByAge(['12','Ivan','15','Asen','9']);