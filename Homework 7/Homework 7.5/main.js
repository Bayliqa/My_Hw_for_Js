// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function Client (id,name,surname,email,phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const Clients = [
    new Client(1, 'Oleg', 'Sambo', 'oleg.sambo@gmail.com', '+380997864538', [
        { title: 'tv', price: 13000 },
        { title: 'phone', price: 11000 },
    ]),
    new Client(2, 'Ivan', 'Petrov', 'ivan.petrov@gmail.com', '+380667865432', [
        { title: 'laptop', price: 25000 },
    ]),
    new Client(3, 'Sergey', 'Ivanov', 'sergey.ivanov@gmail.com', '+380931234567', [
        { title: 'headphones', price: 3000 },
        { title: 'mouse', price: 1500 },
    ]),
    new Client(4, 'Dmitry', 'Sidorov', 'dmitry.sidorov@gmail.com', '+380674567890', [
        { title: 'keyboard', price: 2000 },
    ]),
    new Client(5, 'Andrey', 'Kuznetsov', 'andrey.kuznetsov@gmail.com', '+380665432109', [
        { title: 'monitor', price: 15000 },
    ]),
    new Client(6, 'Alexey', 'Smirnov', 'alexey.smirnov@gmail.com', '+380935678901', [
        { title: 'tablet', price: 12000 },
    ]),
    new Client(7, 'Maxim', 'Popov', 'maxim.popov@gmail.com', '+380957890123', [
        { title: 'camera', price: 8000 },
        { title: 'camera', price: 8000 },
        { title: 'camera', price: 8000 },
        { title: 'camera', price: 8000 },
        { title: 'camera', price: 8000 }
    ]),
    new Client(8, 'Vladimir', 'Fedorov', 'vladimir.fedorov@gmail.com', '+380679012345', [
        { title: 'printer', price: 6000 },
        { title: 'printer', price: 6000 }
    ]),
    new Client(9, 'Igor', 'Morozov', 'igor.morozov@gmail.com', '+380638765432', [
        { title: 'router', price: 5000 },
        { title: 'router', price: 5000 },
        { title: 'router', price: 5000 }
    ]),
    new Client(10, 'Victor', 'Nikolaev', 'victor.nikolaev@gmail.com', '+380998765432', [
        { title: 'smartwatch', price: 7000 },
        { title: 'smartwatch', price: 7000 },
        { title: 'smartwatch', price: 7000 }
    ]),
];

const filterClients = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(filterClients);