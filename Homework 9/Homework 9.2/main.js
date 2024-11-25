// Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts']

const navMenu = document.createElement('ul')
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item
    document.body.appendChild(li)
}
document.body.appendChild(navMenu)