function mid(array) {
    let sum = 0
    array.forEach(el => {
        sum += el
    });

    return sum / array.length
}

console.log(mid([5, 5, 4, 4]))