function sum_and_mid(array) {
    let sum = 0
    array.forEach(el => {
        sum += el
    });

    return [sum, sum / array.length]
}

console.log(sum_and_mid([1, -54, 90, 2, 3]))