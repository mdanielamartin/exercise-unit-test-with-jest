console.log('Hello World')

const sum = (a,b) => {
    return a + b
}

console.log(sum(10,10))

module.exports = {sum};

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function (valueInEuro){
    let value = Number(valueInEuro);
    if (!isNaN(value)){
        return value*1.07;
    }
    return 0;
}

const fromDollarToYen = function (valueInDollar){
    let value = Number(valueInDollar);
    if (!isNaN(value)){
        return value/1.07*156.5;
    }
    return 0;
}

const fromYenToPound = function (valueInYen){
    let value = Number(valueInYen);
    if (!isNaN(value)){
        return value/156.5*0.87;
    }
    return 0;
}
console.log(fromEuroToDollar(3.5))
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};