const JSONP_URL = "https://jsonplaceholder.typicode.com/posts"

//fetch
const fetch_create_post = async (title, body, userId) => {
    return fetch(JSONP_URL, {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            userId
        }),
        headers: {"Content-type": "application/json; charset=utf-8"}
    }).then(r => r.json()).then(json => json)
}

const fetch_get_post = async (id) => {
    return fetch(JSONP_URL + `/${id}`).then(r => r.json()).then(json => json)
}

const fetch_update_post = async (id, title, body) => {
    return fetch(JSONP_URL + `/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {"Content-type": "application/json; charset=utf-8"}
    }).then(r => r.json()).then(json => json)
}

const fetch_delete_post = async (id) => {
    return fetch(JSONP_URL + `/${id}`, {
        method: "DELETE",
    }).then(r => r.json()).then(json => json)
}

console.log(await fetch_create_post("fjdkfd", "fjdisoif", 1))
console.log(await fetch_get_post(3))
console.log(await fetch_update_post(2, "mflmz", "vmfklkvdf"))
console.log(await fetch_delete_post(8))

//axios
import axios from "axios";

const axios_create_post = async (title, body, userId) => {
    return axios(JSONP_URL, {
        method: "POST",
        data: JSON.stringify({
            title,
            body,
            userId
        }),
        headers: {"Content-type": "application/json; charset=utf-8"}
    }).then(r => r.data)
}

const axios_get_post = async (id) => {
    return axios(JSONP_URL + `/${id}`).then(r => r.data)
}

const axios_update_post = async (id, title, body) => {
    return axios(JSONP_URL + `/${id}`, {
        method: "PATCH",
        data: JSON.stringify({
            title,
            body,
        }),
        headers: {"Content-type": "application/json; charset=utf-8"}
    }).then(r => r.data)
}

const axios_delete_post = async (id) => {
    return axios(JSONP_URL + `/${id}`, {
        method: "DELETE",
    }).then(r => r.data)
}

console.log(await axios_create_post("mklsdvmlksd", "iopqe", 1))
console.log(await axios_get_post(9))
console.log(await axios_update_post(15, "ew[pew", "b[xv]"))
console.log(await axios_delete_post(19))