function addOne(x) {
  return x + 1;
}

function pipe (num) {
  let result = num;  
  for (let arg of arguments) {
    if (typeof arg === 'function') {
      result = arg(result);
    }
  }
  return result;
}

pipe(1, addOne); 
pipe(1, addOne, addOne); 
