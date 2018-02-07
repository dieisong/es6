var sayHello = (name, text) => `hello ${name}, ${text}`;
//Esta função é equivalente a linha acima
function sayHello(name, text) {
  return `hello ${name}, ${text}`;
}
//imprimindo a função
console.log(sayHello);
//Chamando a função
console.log(sayHello('Dieison', 'Bem vindo!'));

var obj = n => ({previous: n - 1, next: n + 1});
//Esta função é equivalente a linha acima
function obj(n) {
  return {previous: n - 1, next: n + 1};
}
console.log(obj(10));
console.log(obj(10).next);
console.log(obj(10).previous);