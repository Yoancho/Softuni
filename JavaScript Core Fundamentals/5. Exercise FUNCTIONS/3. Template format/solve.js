function f(arr) {
    let result = `
    <?xml version="1.0" encoding="UTF-8"?>
<quiz>`;
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i+1];
        let t;

  result += `     
  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`;

    }

   result += `
</quiz>`;
    console.log(result);
}

//f(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);

f(['Dry ice is a frozen form of which gas?', 'Carbon Dioxide',
    'What is the brightest star in the night sky?' , 'Sirius']);