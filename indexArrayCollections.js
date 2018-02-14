const numbers = [1, 2, 3, 4, 5, 8];
console.log(numbers.filter(n => n > 4));
console.log(numbers.reduce((acum, current) => acum + current, 10));
console.log(numbers.find(n => n === 5));

//let [a, b, c, d, e, f] = numbers;
//console.log(a, b, c, d, e, f);
let [a, b, , , , f] = numbers;
console.log(a, b, f);

[a, b] = [b, a];
console.log(a, b);

const otherNumbers = [10, 20, 30, ...numbers, 40];
console.log(otherNumbers);

const s = new Set();
s.add(1).add(2).add(3).add(2);
console.log(s);
console.log(s.has(2));
console.log(s.has(5));
s.delete(2);
console.log(s.has(2));

const m = new Map();
m.set('banana', 10);
m.set('orange', 20);
console.log(m);
console.log(m.has('orange'));
m.delete('banana');
console.log(m);
