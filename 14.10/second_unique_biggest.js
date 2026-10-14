function second_unique_biggest(array) {
    let biggest = Math.max(...array)
    let second_biggest = Math.min(...array)

    array.forEach(el => {
        if (el < biggest && el > second_biggest) second_biggest = el
    });

    return second_biggest < biggest ? second_biggest : null
}