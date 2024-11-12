function sum(arr) {
    let total = 0;
    for (let arrElement of arr) {
        total = arrElement + total;
    }
    return total;
}
console.log(sum([3, 4]));
