function positive_filter(array) {
    filtered_array = []
    array.forEach(el => {el >= 0 ? filtered_array.push(el) : null});

    return filtered_array
}

console.log(positive_filter([1, 2, 3, 45, 1, 2, -1, -342, -1, 0, -8]))