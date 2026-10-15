const JSONP_URL = "https://jsonplaceholder.typicode.com/posts"

// fetch
fetch(JSONP_URL).then(r => r.json()).then(json => console.log(json))

// axios

import axios from "axios"

axios.get(JSONP_URL).then(r => console.log(r.data))