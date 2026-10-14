function fio_shortener(fio) {
    splitted_fio = fio.split(" ")
    
    return `${splitted_fio[0]} ${splitted_fio[1][0]}. ${splitted_fio[2][0]}`
}

console.log(fio_shortener("Fjofdisj Fernj Vjsio"))