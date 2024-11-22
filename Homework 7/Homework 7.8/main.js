// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.footSize = size;
    }
}

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('Anna', 18, 36),
    new Cinderella('Bella', 20, 37),
    new Cinderella('Cindy', 19, 35),
    new Cinderella('Diana', 22, 39),
    new Cinderella('Ella', 21, 36),
    new Cinderella('Fiona', 23, 37),
    new Cinderella('Gina', 20, 39),
    new Cinderella('Hanna', 19, 35),
    new Cinderella('Viktoria', 21, 38)
];

const prince = new Prince("Danylo", 23,38 );

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella.footSize;
        document.write('Вот моя любимая принцесса =)');
    }
}

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
        console.log(`Принц нашел свою любимую принцессу: ${cinderella.name}`);
        break;
    }
}

const foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

if (foundCinderella) {
    prince.wife = foundCinderella;
    console.log(`Принц нашел свою любимую принцессу: ${foundCinderella.name}`);
}
console.log(foundCinderella);