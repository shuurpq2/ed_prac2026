const JSONP_URL = "https://jsonplaceholder.typicode.com/posts/1"

//fetch
const fetch_with_timeout = (url, ms) => {
    const controller = new AbortController()
    const { signal } = controller

    fetch(url, { signal }).then(r => r.json()).then(json => console.log(json)).catch(() => console.log("Fetch timeout"))
    setTimeout(() => controller.abort(), ms)
}

fetch_with_timeout(JSONP_URL, 5)

//axios
import axios from "axios"

const axios_with_timeout = (url, ms) => {
    const controller = new AbortController()
    const { signal } = controller

    axios.get(url, { signal }).then(r => console.log(r.data)).catch(() => console.log("Axios timeout"))
    setTimeout(() => controller.abort(), ms)
}

axios_with_timeout(JSONP_URL, 5)