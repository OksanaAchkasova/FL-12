let x1, x2, d;
const two = 2,
    four = 4;

let a = +prompt('Input quadratic coefficient а'), 
    b = +prompt('Input linear coefficient b'), 
    c = +prompt('Input constant c');

if(isNaN(a) || a === '' || a === null || a === 0
      || isNaN(b) || b === '' || b === null
      || isNaN(c) || c === '' || c === null) {
        console.log('Invalid input data');       
} else {
    d = Math.pow(b,two) - four*a*c;
    if(d < 0) {
        console.log('There is no solution');
    } else if(d === 0) {
        x1 = -b / (two*a);
        console.log(`x = ${x1}`);
    } else if(d > 0) {
        x1 = (-b + Math.sqrt(d))/(two*a);
        x2 = (-b - Math.sqrt(d))/(two*a);
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}


    
    

    

