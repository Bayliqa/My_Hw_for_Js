const  findMinNumber = (array) => {
    let min = array[0];
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return {min,max}

}
console.log(findMinNumber([1231231, 123123,1232231,222,2231,12312312]));


