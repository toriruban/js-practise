/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
const userNumber = Number(prompt('Enter a number'));

if (isNaN(userNumber)) {
    console.log('Enter valid number');
} else if (userNumber === 10) {
    console.log('True');
} else {
    console.log('False');
}
