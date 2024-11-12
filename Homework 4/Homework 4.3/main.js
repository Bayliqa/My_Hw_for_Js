function  squareCylinder (radius, height) {
    let result = 2 * Math.PI * radius * height + 2 * Math.PI * (radius **2) ;
    console.log(result);
    return result;
}

let area = squareCylinder(2, 5);