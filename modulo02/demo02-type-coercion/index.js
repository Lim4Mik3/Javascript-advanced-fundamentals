9999999999999999; // 16 digitos 9 ele retorna 10
// 10000000000000000

true + 2;
// 3

"21" + true;
// '21true'

"21" - true;
// '20'

"21" - -1;
// 22

0.1 + 0.2 === 0.3;
// false

3 > 2 > 1;
// false

3 > 2 >= 1;
// true

"B" + "a" + +"a" + "a";
// BaNaNa

"1" == 1;
// Coesão implicita, o motor do node vai tentar converter o valor para encontrar um match
// Ele compara o valor e faz a conversão quando necessária

"1" === 1;
// Validação profunda, irá verificar o tipo e valor

// ----------------

console.assert(String(123) === "123", "Explicit convertion to string");
console.assert(123 + "" === "123", "Implicit convertion to string");

console.assert(
  ("Hello" || 1) === "Hello",
  "|| returns the first truthy element or the both truthy elements"
);

console.assert(
  ("Hello" && 123) === 123,
  "&& always will return the last element"
);

// ----------------
const item = {
  name: "Leonardo Oliveira",
  age: 23,

  // string: 1 se não for primitivo, chama o valueOf
  toString() {
    // console.log("Hey");
    return `Name: ${this.name}, age: ${this.age}`;
  },

  // number: 1 se não for primitivo, chama o toString
  valueOf() {
    return { hey: "dude" };
    // return 007
  },

  // Ele tem prioridade na parada!

  [Symbol.toPrimitive](coercionType) {
    // console.log("Trying to covert to", coercionType);
    const types = {
      string: JSON.stringify(this),
      number: "007",
    };

    return types[coercionType] || types.string;
  },
};

// console.log("toString", String(item));

// // Vai retornar um NaN pois o toString retornou a string;
// console.log("valueOf", Number(item));

// Depois de adicionar o toPrimitive
// console.log("String", String(item));
// console.log("Number", Number(item));
// Chama a conversão default
// console.log("Date", new Date(item));

// console.assert(item + 0 === '{"name":"Leonardo Oliveira","age":23}0');

// console.log("!!item is true?", !!item);
// console.assert(!!item);

// console.log("string.concat", "Ae".concat(item));
// console.assert("Ae".concat(item) === 'Ae{"name":"Leonardo Oliveira","age":23}');

// console.log("implicit + explicit coercion (using ==)", item == String(item));
// console.assert(item == String(item));

const item2 = { ...item, name: "Zézin", age: 20 };

// console.log("New Object", item2);
console.assert(item2.name === "Zézin" && item2.age === 20);
