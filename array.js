{
  let arr = [10, 20, 30, 40, 50];
  function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(arraySum(arr));
}
console.log("--------------------------");

{
  let arr = [25, 10, 75, 40, 60];
  let maxNum = arr.reduce((curr, next) => {
    let max = curr;
    if (max < next) max = next;
    return max;
  });
  console.log(maxNum);
}
console.log("--------------------------");

{
  let arr = [45, 12, 89, 5, 32];
  let minNum = arr.reduce((curr, next) => {
    let min = curr;
    if (min > next) min = next;
    return min;
  });
  console.log(minNum);
}
console.log("--------------------------");

{
  let arr = [10, 15, 20, 25, 30, 35, 40];
  let even = arr.filter((item) => item % 2 === 0);
  let odd = arr.filter((item) => item % 2 !== 0);
  console.log(`Even Numbers: ${even.length}; Odd Numbers: ${odd.length}`);
}
console.log("--------------------------");

{
  let arr = [10, 20, 30, 40, 50];
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(reversed);
}
console.log("--------------------------");

{
  let arr = [10, 20, 40, 50, 60];
  let isInclude = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) isInclude = true;
  }
  isInclude ? console.log("Found") : console.log("Not Found.");
}
console.log("--------------------------");

{
  let arr = [5, 10, 5, 20, 5, 30, 10];
  let cound = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) cound++;
  }
  console.log(cound);
}
console.log("--------------------------");
{
  let arr = [10, 20, 10, 30, 20, 40, 50];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) found = true;
    }
    if (found === false) newArr.push(arr[i]);
  }
  console.log(newArr);
}
console.log("--------------------------");

{
  let arr = [10, 45, 20, 35, 50, 40];
  let max = 0;
  let sec = 0;
  for (let num of arr) {
    if (num > max) {
      sec = max;
      max = num;
    }
  }
  console.log(sec);
}
console.log("--------------------------");

{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = arr.filter((item) => item % 2 === 0);
  let odd = arr.filter((item) => item % 2 !== 0);
  console.log(`Even: [${even}]; Odd: [${odd}]`);
}
