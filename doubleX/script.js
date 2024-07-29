function doubleX(str) {
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x" && str[i + 1] === "x") {
        return true;
      } else if (str[i + 1] === "x" && str[i + 2] === "x") {
        return true;
      } else return false;
    }
  } else return false;
}
console.log(doubleX("axxbxb"));
