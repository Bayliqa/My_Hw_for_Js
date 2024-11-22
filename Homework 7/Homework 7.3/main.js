// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function User(id,name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users =[
    new User(1, "Danylo", "Leyba", "superSilnuyJs@gmail.com", '+380997864538'),
    new User(2,'Oly', 'Pushkina', 'lol@gmail.com', '+380997533645'),
    new User(3, 'Vasya', 'Kolotukich', 'asd@gmail.com', '+380994341223'),
    new User(4, 'Igor', 'Brudkivich', 'samop@gmail.com', '+380554341223'),
    new User(5, 'Saha', 'Sumprich', 'gta@gmail.com', '+38066412357223'),
    new User(6, 'Evgeniy', 'Govrilov', 'dota2@gmail.com', '+380634341223'),
    new User(7, 'Alex', 'Evseev', 'stalker2@gmail.com', '+387204341223'),
    new User(8, 'Vlodimir', 'Kalagula', 'garysmod@gmail.com', '+380994341223'),
    new User(9, 'Nasty', 'kiroxina', 'Heroes3Magic@gmail.com', '+380504341223'),
    new User(10, 'Mariya', 'Volochkova', 'Mainkraft@gmail.com', '+3806645341223')
]


// let sortUsers = users.sort((a, b) => b.id - a.id)
// console.log(sortUsers)

let sortUsers  = users.sort((a, b) => b.id - a.id)
console.log(sortUsers)

