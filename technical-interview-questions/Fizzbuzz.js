for (i = 0; i < 100; i++) {
  let text = "";
  if (i % 3 === 0 && i !== 0) {
    text += "Fizz";
  }
  if (i % 5 === 0 && i !== 0) {
    text += "Buzz";
  }
  if (i % 7 === 0 && i !== 0) {
    text += "Bazz";
  }
  console.log(text !== "" ? text : i);
}
