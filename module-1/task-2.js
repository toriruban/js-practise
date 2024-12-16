// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

const userSalary = Number (prompt('Enter your salary'));
const bonus = 20/100 * userSalary;
const totalSalary = bonus + userSalary;
console.log(totalSalary);