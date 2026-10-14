function cel_to_f(cels) {
    let f = cels * 9.5 + 32
    return f
}


function words_count(expr) {
    list_expr = expr.split(" ")
    return list_expr.length
}