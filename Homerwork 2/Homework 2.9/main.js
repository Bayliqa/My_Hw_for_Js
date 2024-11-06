let EnterDay = prompt('Enter the day of the week (1-7)');

switch (EnterDay) {
    case '1':
        console.log('Понеділок');
        console.log('1. Купити в магазині ключ на 12');
        console.log('2. Передати посилку о 16:00');
        console.log('3. Прибрати у кімнаті');
        break;
    case '2':
        console.log('Вівторок');
        console.log('1. Допомогти другу з речами о 12:00');
        console.log('2. Передати посилку о 16:00');
        console.log('3. Сходити до магазину');
        break;
    case '3':
        console.log('Середа');
        console.log('1. Сходити в спортзал вранці');
        console.log('2. Забрати речі з хімчистки');
        console.log('3. Приготувати обід');
        break;
    case '4':
        console.log('Четвер');
        console.log('1. Провести зустріч о 14:00');
        console.log('2. Зробити звіт по проекту');
        console.log('3. Піти на прогулянку ввечері');
        break;
    case '5':
        console.log('П’ятниця');
        console.log('1. Піти в кінотеатр ввечері');
        console.log('2. Закупити продукти на вихідні');
        console.log('3. Приготувати вечерю для друзів');
        break;
    case '6':
        console.log('Субота');
        console.log('1. Провести генеральне прибирання квартири');
        console.log('2. Погуляти в парку');
        console.log('3. Прочитати нову книгу');
        break;
    case '7':
        console.log('Неділя');
        console.log('1. Сходити на йогу вранці');
        console.log('2. Відпочити вдома');
        console.log('3. Підготуватися до нового тижня');
        break;
    default:
        console.log('Некоректне значення. Введіть число від 1 до 7.');
}
