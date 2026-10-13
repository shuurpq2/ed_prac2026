function builder(entity) {
    let message = `${entity.name}'s appointment `

    if (entity.appointment == "doc") {
        message += `to doctor ${entity.doc_surname}`
    } else {
        message += `to cab ${entity.cab}`
    }

    message += `.\nUUID: ${entity.uuid}\n`

    console.log(message)
}

const entity1 = {
    name: "dagestan",
    appointment: "doc",
    doc_surname: "ijwefjiof",
    uuid: crypto.randomUUID(),
}

const entity2 = {
    name: "dagestan",
    appointment: "rec",
    cab: "202",
    uuid: crypto.randomUUID(),
}

builder(entity1)
builder(entity2)