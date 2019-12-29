function getMin () {
  let minNum = arguments[0];
  for (let num of arguments) {
    minNum = num < minNum ? num : minNum;
  }
  return minNum;
        
}
getMin (3,0,-3);