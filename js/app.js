/**
 * Created by jean-michel.legrand on 28/01/2016.
 */
function add(x, y) {
  return x + y ;
}



console.log('add(2, 3):', add(2, 3)); // should return 5
console.log('add(char(2), char(3)):' , add('2', '3')); // should not return '23'
console.log('add(0.1, 0.2):', add(0.1, 0.2)); // should return 0.4


// expect(add(0.1, 0.2)).toBe(0.3);