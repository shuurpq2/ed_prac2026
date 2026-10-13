function string_reverse(string) {
    let result = ""

    for (let i = 0; i < string.length; i++) result = string[i] + result

    return result
}

const string = "STRING TO REVERSE"
console.log(string)
console.log(string_reverse(string))