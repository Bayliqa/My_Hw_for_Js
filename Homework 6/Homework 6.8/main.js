let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let map1 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value,index) => {
        value.id = index + 1;
        return value;
    })
console.log(map1);

// // -------------------------------------------Друга скороченна версія---------------------------------------------------
// // let mappedUsers = coursesAndDurationArray.map((value,index) => {
// //     return { id: index +1, title:value.title, monthDuration: value.monthDuration };
// // })
//
// console.log(mappedUsers);
// -----------------------------------------Обєднюю та спрощую----------------------------------------------------------
//  let sort = coursesAndDurationArray.sort((a, b) => {
//      return b.monthDuration - a.monthDuration;
//  })
//  let filter = sort.filter((value) => value.monthDuration>5);
//
//  let mapperdUsers = filter.map(function (value, index) {
//      return {
//          id: index + 1,
//          title: value.title,
//          monthDuration: value.monthDuration
//      };
//  })
// console.log(mapperdUsers);
// -----------------------------------------Ще сильніше спрощення!!!-------------------------------------------------------


// // ------------------------------------------Перша версія окремо Відсортовані курси---------------------------------------------------------
// let sort = coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration;
// })
// console.log(sort);
// // ------------------------------------------Відфільтровані курси-------------------------------------------------------
// let filterUsers = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterUsers);
//
// // -------------------------------------Перетворення кожного елементу в інший тип---------------------------------------
// let mappedUsers = coursesAndDurationArray.map(function(value, index) {
//     return {
//         id: index +1,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
// })
//
// console.log(mappedUsers);
//

