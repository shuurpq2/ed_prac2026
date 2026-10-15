const FAKE_URL = "jofweiqjifoewjio.jofwejoif"

//fetch
fetch(FAKE_URL).catch(e => console.log(`Error while fetch request: ${e}`))

//axios
import axios from "axios"

axios(FAKE_URL).catch(e => console.log(`Error while axios request: ${e}`))