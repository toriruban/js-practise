// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
// За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».

// const userName = 'Vicky';
// const userSum = 300;

// console.log(alert(`Thank's ${userName}! Before payment ${userSum} hryvnias.`));


const userName = prompt('Enter your name:');
const userSum = parseFloat(prompt('Enter your sum:'));

if(!isNaN(userSum)){
    console.log(`Dear ${userName} your sum is ${userSum}`);
}else{
    console.log('Please enter a valid sum.')
}