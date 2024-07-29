function stringBits(str) {
  let newString = "";

  for (let i = 0; i < str.length; i += 2) {
    newString += str[i];
  }

  return newString;
}

stringBits("Hello");
