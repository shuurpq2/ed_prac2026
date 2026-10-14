function dublicate_cleaner(array) {
    let clear_arr = []
    array.forEach(el => {if (!clear_arr.includes(el)) clear_arr.push(el)});

    return clear_arr
}

console.log(dublicate_cleaner(["a", "b", "a", "ab", "ccc", "ab"]))