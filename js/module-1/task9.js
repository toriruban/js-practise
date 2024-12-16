// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

// function sqrtNumber(){
//     const numberPlaceholder = 16;
//     const numberSqrt = Math.sqrt(numberPlaceholder);

//     return numberSqrt;
// }

// console.log(sqrtNumber());

function sqrtNumber(){
    const numberPlaceholder = Number(prompt('Enter your number to calculate:'));
    const numberSqrt = Math.sqrt(numberPlaceholder);

    if(isNaN(numberPlaceholder)){
        console.log('Enter a valid number');
    }else{
        console.log(`The square root of ${numberPlaceholder} is ${numberSqrt}`);
    }
    return numberSqrt;
}

sqrtNumber();


