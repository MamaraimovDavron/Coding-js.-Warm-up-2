function countXX(str) {
  let count = 0;

  if (str.includes("xx")) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] + str[i + 1] === "xx") {
        count += 1;
      } else if (str[i] + str[i + 1] === "xxx") {
        count += 2;
      } else if (str[i] + str[i + 1] === "xxxx") {
        count += 3;
      }
    }
    return count;
  } else return 0;
}

console.log(countXX("abcxxxx"));
