/*
? В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
? Співробітник - Привіт
? Директор - Вітаю
? '' - Немає логіну
? В інших випадках повідомлення має бути порожнім.
*/

const isUser = 'Співробітник';

if (isUser === 'Співробітник'){
    console.log('Привіт');
} else if(isUser === 'Директор'){
    console.log('Вітаю');
} else if(isUser === ''){
    console.log('Немає логіну');
} else{
    console.log('');
}




function getMessage(login) {
    if (login === 'Співробітник') {
        return 'Привіт';
    } else if (login === 'Директор') {
        return 'Вітаю';
    } else if (login === '') {
        return 'Немає логіну';
    } else {
        return '';
    }
}

const issUser = 'Співробітник'; 

console.log(getMessage(issUser));


