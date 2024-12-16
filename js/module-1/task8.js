// За допомогою об’єкту Math виведіть в консоль 
// найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)


// As in task
function findNumber(){
    const maxNumber = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
    const minNumber = Math.min(2, 34, 99, 3, 22, 36, 733, 18);

    console.log(maxNumber, minNumber);
    return { max: maxNumber, 
             min: minNumber };
}



// How we can reuse function
function findNumber(numbers){
    const maxNumber = Math.max(...numbers); //Using spread operator to pass an array of numbers
    const minNumber = Math.min(...numbers);

    return { max: maxNumber, 
             min: minNumber };
}

const numbersSet1 = [1, 5, 10, 15, 20];
const result1 = findNumber(numbersSet1);
console.log(result1.max); // 20
console.log(result1.min); // 1

const numbersSet2 = [2, 34, 99, 3, 22, 36, 733, 18];
const result2 = findNumber(numbersSet2);
console.log(result2.max, result2.min); // 733 2








