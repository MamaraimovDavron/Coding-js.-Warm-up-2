function frontTimes(str, n) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += str.slice(0, 3);
  }

  return newString;
}

console.log(frontTimes("Chocolate", 3));
