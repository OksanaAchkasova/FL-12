function countNumbers (str) {
  let array = [];
  let obj = {};
  for (let elem of str) {
    if (!isNaN(elem)) {
      array.push(elem);
    }
  }

  for (let key in array) {
    array[key] in obj ? obj[array[key]]++ : obj[array[key]] = 1;    
  }
    return obj;     
}
  
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
 