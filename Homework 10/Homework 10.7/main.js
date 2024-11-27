function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('There is not in localStorage!');
    }

    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    const jsonArray = JSON.stringify(array);
    localStorage.setItem(arrayName, jsonArray);
}
