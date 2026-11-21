{
  let a = 5;
  let b = 3;
  console.log(a + b * 2);
}
console.log("--------------------------");

{
  let x = 10;
  x += 5;
  x -= 3;
  console.log(x);
}
console.log("--------------------------");

{
  let num = 8;
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
console.log("--------------------------");

{
  for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
  }
}
console.log("--------------------------");

{
  let sum = 0;
  for (let i = 1; i <= 4; i++) {
    sum += i;
  }
  console.log(sum);
}
console.log("--------------------------");

{
  let numbers = [10, 20, 30, 40];
  console.log(numbers[2]);
}
console.log("--------------------------");

{
  let numbers = [5, 10, 15, 20];
  numbers[1] = 25;
  console.log(numbers);
}
console.log("--------------------------");

{
  let numbers = [2, 4, 6, 8];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
console.log("--------------------------");

{
  let numbers = [10, 20, 30, 40, 50];
  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
}
console.log("--------------------------");

{
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log(count);
}
