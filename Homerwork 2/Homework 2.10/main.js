let Num1 = prompt("Enter number");
let Num2 = prompt("Enter number");

Num1 = +Num1;
Num2 = +Num2;


if (Num1 > Num2) {
    console.log('Максимальне число', Num1);
} else if (Num1 < Num2) {
    console.log('Максимальне число', Num2)
} else if (Num1 === Num2)
    console.log('Вони рівні');
