function makeNumber (str) {
  let array = [];
  for (let elem of str) {
    if (!isNaN(elem)) {
      array.push(elem);
    }
  }
  return array.join('');
}

makeNumber ('erer384jjjfd123');
makeNumber ('123098h76gfdd');
makeNumber ('ijifjgdj');