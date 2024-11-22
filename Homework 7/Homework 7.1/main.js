// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, "Danylo", "Leyba", "afk@gmail.com", '+380997864538')
console.log(user)
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
console.log(users)




