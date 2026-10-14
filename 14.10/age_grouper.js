function age_grouper(array) {
    let grouped = {}
    array.forEach(el => {
        grouped[el.age] === undefined ? grouped[el.age] = [el] : grouped[el.age].push(el)
    });

    return grouped
}

console.log(age_grouper([{name: "fjie", age: 10}, {name: "fjrio", age: 12}, {name: "jfrio", age: 10}]))