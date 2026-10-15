const JSONP_URL = "https://jsonplaceholder.typicode.com"
const FAKE_URL = "jfdlksflkjdlkfsd.fjsoiafjwe"

//fetch
Promise.all([
    fetch(FAKE_URL + "/products").then(r => r.json()).then(json => console.log(json)).catch(e => console.log("Error while fetch")),
    fetch(FAKE_URL + "/categories").then(r => r.json()).then(json => console.log(json)).catch(e => console.log("Error while fetch")),
    fetch(JSONP_URL + "/users").then(r => r.json()).then(json => console.log(json)).catch(e => console.log("Error while fetch")),
    fetch(JSONP_URL + "/jifwejioewf").then(r => r.json()).then(json => console.log(json)).catch(e => console.log("Error while fetch")),
    fetch(JSONP_URL + "/dagestan").then(r => r.json()).then(json => console.log(json)).catch(e => console.log("Error while fetch")),
])

//axios
import axios from "axios";

Promise.all([
    axios(JSONP_URL + "/posts/4").then(r => console.log(r.data)).catch(e => console.log("Error while axios")),
    axios(JSONP_URL + "/kakain").then(r => console.log(r.data)).catch(e => console.log("Error while axios")),
    axios(JSONP_URL + "/iefjfieji").then(r => console.log(r.data)).catch(e => console.log("Error while axios")),
    axios(JSONP_URL + "/priora").then(r => console.log(r.data)).catch(e => console.log("Error while axios")),
    axios(JSONP_URL + "/123").then(r => console.log(r.data)).catch(e => console.log("Error while axios")),
])