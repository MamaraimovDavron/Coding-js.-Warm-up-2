function stringTimes(str, n) {
  let newString = "";

  for (let i = 0; i < n; i++) {
    newString += str;
  }

  return newString;
}

console.log(stringTimes("Hi", 4));
