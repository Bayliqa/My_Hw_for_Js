function findMinNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const numbers = [5, 8, 1, 3, 10];


