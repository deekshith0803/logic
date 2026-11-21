{
  for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
console.log("--------------------------");

{
  for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = i; j <= 5; j++) {
      star += "*";
    }
    console.log(star);
  }
}
console.log("--------------------------");

{
  for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j;
    }
    console.log(num);
  }
}
console.log("--------------------------");

{
  for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += i;
    }
    console.log(num);
  }
}
console.log("--------------------------");

{
  for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let k = 1; k <= 5 - i; k++) {
      star += " ";
    }
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
