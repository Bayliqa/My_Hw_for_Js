function stringToarray(str) {
    let string  = str.split(' ')
    return string
}
console.log(stringToarray('Ревуть воли як ясла повні'))

// --------Інший Варінт з перевіркою ---------
// function stringToArray(str) {
//     if (str){
//         let spl = str.split(' ');
//         return spl;
//     }
//     return [""];
// }
// console.log(stringToArray("Ревуть воли як ясла повні"));