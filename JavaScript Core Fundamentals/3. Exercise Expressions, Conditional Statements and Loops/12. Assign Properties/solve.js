function f(arr) {
  let result = {};
  result[arr[0]]=arr[1];
  result[arr[2]]=arr[3];
  result[arr[4]]=arr[5];

  console.log(result)
}

f(['name', 'Pesho', 'age', '23', 'gender', 'male'])