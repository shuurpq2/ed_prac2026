function intersect_check(array1, array2) {
    let array2_copy = array2.copyWithin()
    let intersect = []

    array1.forEach(el => {
        if (array2_copy.includes(el)) {
            array2_copy.splice(array2_copy.indexOf(el), 1);
            intersect.push(el)
        }
    });

    return intersect
}

console.log(intersect_check([1, 2, 3, 4, 5, 1, 1, 1], [1, 1, 1, 2, 3]))