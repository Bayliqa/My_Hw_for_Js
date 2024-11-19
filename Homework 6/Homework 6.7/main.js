// function sortNums (numsArr,direction) {
//     if (direction === 'descending') {
//         return  numsArr.sort((a,b) => b - a);
//     }
//     if (direction === 'ascending') {
//         return numsArr.sort((a,b) => a - b);
//     }
// }
//
// console.log(sortNums([3,11,21], 'descending'))
// console.log(sortNums([21,11,3], 'ascending'))
//
// // ---------Спрощенна Версія-----------------


function sortNums (numsArr,direction) {
    if (direction === 'descending')  return  numsArr.sort((a,b) => b - a);
    if (direction === 'ascending') return numsArr.sort((a,b) => a - b);
}
console.log(sortNums([3,11,21], 'descending'))
console.log(sortNums([21,11,3], 'ascending'))
