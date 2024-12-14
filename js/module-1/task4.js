//Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.//

// const fullName = 'Ruban Viktoriia';
// const fullNameLength = fullName.length;
// console.log(fullNameLength);

const userName = prompt('Enter your name');
const userSurname = prompt('Enter your surname');
const userFullNameLength = userName.length + userSurname.length;

const fullName = (`My name is ${userName} and surname ${userSurname}. And my full name length is ${userFullNameLength}`);
console.log(fullName);