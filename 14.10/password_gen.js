function password_gen(length, symbols = null) {
    if (!symbols) {
        symbols = []
        for (i = 0; i < 26; i++) {
            symbols.push(String.fromCharCode(65+i), String.fromCharCode(97+i))
        }
        symbols.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "_")
    }

    let password = Array.from({length: length}, (_, i) => symbols[Math.floor(Math.random() * symbols.length)])

    return password.join("")
}

console.log(password_gen(20))