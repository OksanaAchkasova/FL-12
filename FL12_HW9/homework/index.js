const ACTORS = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
],
  MSEC_PER_DAY = 864e5,
  MAP_ARRAY_CONST = 30,
  FORMAT_DATE_CONST = 10;

function convert(...arr) {
  let rezArray = [];
  for (let elem of arr) {
    if (typeof elem === 'string') {
      rezArray.push(parseInt(elem));
    } else {
      rezArray.push('' + elem);
    }
  }
  return rezArray;
}

function executeforEach (arr, func) {
  for (let elem of arr) {
    func(elem);
  }
}

function mapArray (arr, func) {
  let rezArray = [];
    executeforEach(arr, function(elem) {
    rezArray.push(func(parseInt(elem)));
  });  
  return rezArray; 
}

function filterArray (arr, func) {
  let rezArray = [];
    executeforEach(arr, function(elem) {
      if (func(elem)) {
        rezArray.push(elem);
      }
  });  
  return rezArray; 
}

function flipOver (str) {
  let strRevers = '';
   for(let i = str.length-1; i >= 0; i--) {
     strRevers += str[i];     
   }
  return strRevers;
}

flipOver('hey world');

function makeListFromRange (arr) {
  let rezArray = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    rezArray.push(i);
  }
  return rezArray;
}

function getArrayOfKeys (arrObj, key) {
  let rezArray = [];
  executeforEach(arrObj, function(elem) {
    rezArray.push(elem[key]);
  });
  return rezArray;
}

getArrayOfKeys(ACTORS, 'name'); 

function substitute (arr) {
  return mapArray(arr, function(el) {
    if (el < MAP_ARRAY_CONST) {
      return '*';
    } else {
      return el;
    }
  });     
}

function getPastDay (date, days) {
  return new Date(date - new Date(days * MSEC_PER_DAY)).getDate();
}

function formatDate (date) {
  date = new Date(date);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < FORMAT_DATE_CONST) {
    hours = '0'+ hours;
  }
  if (minutes < FORMAT_DATE_CONST) {
    minutes = '0'+ minutes;
  }
  console.log(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${hours}:${minutes}`);
}
