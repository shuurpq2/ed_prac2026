const JSONP_URL = "https://jsonplaceholder.typicode.com/posts"

//fetch
fetch(JSONP_URL, {
    method: "POST",
    body: JSON.stringify({
        title: "jfjfj",
        body: "jfdo",
        userId: 1
    }),
    headers: {"Content-type": "application/json; charset=utf-8"}
}).then(r => r.json()).then(json => console.log(json))

//axios
import axios from "axios";

axios(JSONP_URL, {
    method: "POST",
    data: JSON.stringify({
        title: "fioewjiofweio",
        body: "vclnlv",
        userId: 5
    }),
    headers: {"Content-type": "application/json; charset=utf-8"}
}).then(r => console.log(r.data))