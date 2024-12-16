// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. 
// Попросити в користувача ввести пароль та перевірити чи він правильний.

function userPassword (){
    const SAVED_PASSWORD = 'dance1211';
    const userInput = prompt('Enter your password');

    if(SAVED_PASSWORD === userInput){
        console.log('You can log in');
    }else{
        console.log('Try again');
    }
}

userPassword ();