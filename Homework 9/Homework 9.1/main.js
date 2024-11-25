// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let myDiv = document.createElement("div");
myDiv.classList.add('wrap','collapse','alpha','beta');
document.body.appendChild(myDiv);
let cloneDiv = myDiv.cloneNode(true);
document.body.appendChild(cloneDiv);


