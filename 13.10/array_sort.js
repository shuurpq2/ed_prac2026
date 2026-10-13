function array_bubble_sort(array, reverse = false) {
    let is_sorted = false
    while (!is_sorted) {
        is_sorted = true

        for (let i = 0; i < array.length-1; i++) {
            if (reverse ? array[i] < array[i+1] : array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp

                is_sorted = false
            }
        }
    }
}

let ar = [7, 919, 2, -214, 7, 982, 77, 882, 17]

array_bubble_sort(ar)
console.log(ar)

array_bubble_sort(ar, true)
console.log(ar)