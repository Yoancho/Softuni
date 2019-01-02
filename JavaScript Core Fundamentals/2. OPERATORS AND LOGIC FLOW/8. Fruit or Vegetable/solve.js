function f(food) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']

    if (fruits.includes(food)){
        console.log('fruit');
    } else if (vegetables.includes(food)){
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

f('banana')
f('cucumber')
f('pizza')