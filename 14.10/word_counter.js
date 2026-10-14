function word_counter(sentence) {
    let splitted_sentence = sentence.split(" ")
    let ans = {}

    splitted_sentence.forEach(word => {
        Object.hasOwn(ans, word) ? ans[word]++ : ans[word] = 1
    })

    return ans
}

console.log(word_counter("a b c d a a a bc a b privet"))