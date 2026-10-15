const FAKE_URL = "fjdwdowfjid.fdjwfdo"

//fetch
fetch(FAKE_URL).catch(() => {console.log("Error while fetch request. Retrying..."); fetch(FAKE_URL).catch(() => console.log("Error while fetch request again"))})

//axios
import axios from "axios"

axios.get(FAKE_URL).catch(() => {console.log("Error while axios request. Retrying..."); axios.get(FAKE_URL).catch(() => console.log("Error while axios request again"))})
