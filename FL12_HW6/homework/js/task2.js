let a = +prompt('Input side A lenght of triangle'), 
    b = +prompt('Input side B lenght of triangle'), 
    c = +prompt('Input side C lenght of triangle');

if(isNaN(a) || a === '' || a === null || typeof a === 'undefined' 
  || isNaN(b) || b === '' || b === null || typeof b === 'undefined' 
  || isNaN(c) || c === '' || c === null || typeof c === 'undefined') {
        alert('Input values should be ONLY numbers');
   } else {
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        c = parseInt(c, 10);
        if(a === 0 || b === 0 || c === 0) {
            alert('A triangle must have 3 sides with a positive definite length');
        } else if(a + b > c && a + c > b && b + c > a) {
            if(a === b && b === c ) {
                console.log('Equilateral triangle');
            } else if(a === b || a === c || b === c) {
                console.log('Isosceles triangle');
            } else if(a !== b && b !== c && a !== c) {
                console.log('Scalene triangle ');
            }
        } else {   
            alert('Triangle doesn’t exist');
        }        
   }  