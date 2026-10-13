function is_palindrome(string) {
    const str_len = string.length
    let ans = true

    for (let i = 0; i < parseInt(str_len / 2); i++) {
        if (string[i] != string[str_len-1-i]) {
            ans = false
            break
        }
    }

    return ans
}

console.log(is_palindrome("qwert"))
console.log(is_palindrome("qwewq"))