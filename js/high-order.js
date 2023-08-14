// High-Order-1



// function getNames(baho) {
//   const gradeMap = { 5: 'A', 4: 'B', 3: 'C' };
  
//   return students
//     .filter(student => student.percent >= baho)
//     .map(student => ({ ...student, grade: gradeMap[baho]}))
//     .map(student => student.name);
// }

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// console.log(getNames(5)); 




// High-Order-2



// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const animalCount = animals.reduce((count, animal) => {
//   count[animal] = (count[animal] || 0) + 1;
//   return count;
// }, {});

// console.log(animalCount);




// High-Order-3



// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(number => number * number);

// console.log(squaredNumbers);




// High-Order-4



// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const sumOfPositiveNumbers = numbers
//   .filter(number => number > 0)
//   .reduce((sum, number) => sum + number, 0);

// console.log(sumOfPositiveNumbers);




// High-Order-5



// const name = 'George Raymond Richard Martin';

// const initials = name
//   .split(' ')
//   .map(word => word[0])
//   .join('');

// console.log(initials);




// High-Order-6



// const people = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jennifer', age: 65}
// ];

// people.sort((a, b) => b.age - a.age);
// const ageDifference = people[0].age - people[people.length - 1].age;

// console.log(ageDifference);




// High-Order-7



// const splitArray = (arr) => {
//     const evens = arr.filter(num => num % 2 === 0);
//     const odds = arr.filter(num => num % 2 !== 0);
    
//     return [evens, odds];
//   }
  
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(splitArray(array));




// Hgh-Order-8




//   const removeDuplicates = (arr) => {
//     const result = arr.reduce((unique, item) => {
//       if (!unique.includes(item)) {
//         unique.push(item);
//       }
//       return unique;
//     }, []);
    
//     return result;
//   }
  
//   const array = [1, 2, 3, 2, 4, 5, 3, 1];
//   console.log(removeDuplicates(array));




// High-Order-9



// let sortedById = products.sort((a, b) => a.id - b.id);
// let sortedByName = products.sort((a, b) => a.name.localeCompare(b.name));
// let sortedByPrice = products.sort((a, b) => a.price - b.price);
// let sortedByRating = products.sort((a, b) => b.rating - a.rating);
// let sortedByDiscount = products.sort((a, b) => b.discount - a.discount);




// High-Order-10



// let topRatedProduct = products.sort((a, b) => b.rating - a.rating)[0];




// High-Order-11



// let lowestPriceProduct = products.sort((a, b) => a.price - b.price)[0];




// High-Order-12



// let totalPrice = products.reduce((total, product) => total + product.price, 0);




// High-Order-13



// let productNames = products.map((product) => product.name);




// High-Order-14



// let productName = products.find((product) => product.id === 5).name;




// High-Order-15



// let filteredProducts = products.filter((product) => product.id !== 4);




// High-Order-16



// let isOnlyLetters = (str) => str.split('').every((char) => char.match(/[a-zA-Z]/));




// High-Order-17



// let getTruthyFalsy = (arr) => {
//   return arr.reduce((result, element) => {
//     element ? result.truthy.push(element) : result.falsy.push(element);
//     return result;
//   }, { truthy: [], falsy: [] });
// };

// let input = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// let result = getTruthyFalsy(input);
// console.log(result);




// High-Order-19



// let getWordLengths = (str) => str.split(' ').map((word) => word.length);

// let input = "Men Abdulaziz Programmerman";
// let result = getWordLengths(input);
// console.log(result);
// High-Order-19



// let hasWhitespace = (str) => str.split('').some((char) => char === ' ');

// let input = "Men Abdulaziz Programmerman";
// let result = hasWhitespace(input);
// console.log(result);




// High-Order-20



// let obj = { a: 2, b: 5, c: 7 };
// let result = Object.entries(obj).map(([key, value]) => key + value);
// console.log(result);