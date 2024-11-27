// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// -------Спосіб через іпут з неймом-----

// const myForm = document.forms.myForm;
//
// const buttonValue = myForm.sendButton;
// buttonValue.addEventListener('click', () => {
//     const nameValue = myForm.name.values;
//     const surnameValue = myForm.surname.value;
//     const ageValue = myForm.age.value;
//
//     let obj = {nameValue, surnameValue, ageValue};
//     console.log(obj);
// });


//// -------Спосіб через батон звертаемось до форми-----
const myForm = document.forms.myForm;

let target = document.getElementById('target');


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = myForm.name.value;
    const surnameValue = myForm.surname.value;
    const ageValue = myForm.age.value;

    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})