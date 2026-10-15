const JSONP_URL = "https://jsonplaceholder.typicode.com/posts"

//fetch
Promise.all([
    fetch(JSONP_URL + "/1").then(r => r.json()).then(json => console.log(json)),
    fetch(JSONP_URL + "/2").then(r => r.json()).then(json => console.log(json)),
    fetch(JSONP_URL + "/3").then(r => r.json()).then(json => console.log(json))
])

//axios
import axios from "axios";

Promise.all([
    axios(JSONP_URL + "/4").then(r => console.log(r.data)),
    axios(JSONP_URL + "/5").then(r => console.log(r.data)),
    axios(JSONP_URL + "/6").then(r => console.log(r.data))
])