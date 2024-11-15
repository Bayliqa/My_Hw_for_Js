const exchange = (sumUA, currencyValues, exchangeCurrency) => {
    let changerCurrency;
    for (const changerCurrencyElement of currencyValues) {
        if (changerCurrencyElement.currency === exchangeCurrency){
            changerCurrency = changerCurrencyElement;
        }
    }
    let result = sumUA/changerCurrency.value;
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));

