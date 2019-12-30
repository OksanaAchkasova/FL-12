function isLeapYear (str) {
  let date = new Date (str);
  if (!isNaN(date)) {
    let year = date.getFullYear();
    let f29 = new Date (year, 1, 29);
    if (f29.getMonth () === 1) {
      return `${year} is a leap year`;
    } else {
      return `${year} is not a leap year`;
    }
  } else {
    return 'Invalid Date';
  }
}

isLeapYear('2020-01-01 00:00:00'); 
isLeapYear('2020-01-01 00:00:00777'); 
isLeapYear('2021-01-15 13:00:00'); 
isLeapYear('2200-01-15 13:00:00'); 
isLeapYear(1213131313135465656654564646542132132131); 
isLeapYear(1213131313); 