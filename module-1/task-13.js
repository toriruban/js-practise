// Напишіть програму на JavaScript, яка запитує у користувача два числа, 
// обчислює їх суму за допомогою функції та виводить результат на екран.

// function getSum (){
//     const firstNumber = Number(prompt('Enter first number'));
//     const secondNumber = Number(prompt ('Enter second number'));
//     const result = firstNumber +  secondNumber;

//     console.log(result);
//     return result;
// }

// getSum ();

function getSum (){
    const firstNumber = parseFloat(prompt('Enter first number'));
    const secondNumber = parseFloat(prompt('Enter second number'));
    const result = firstNumber +  secondNumber;

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        console.log('Please enter valid number')
    }else{
        console.log(`The sum of ${firstNumber} and ${secondNumber} is ${result}`);
    }
      return result;
    }

    getSum ();