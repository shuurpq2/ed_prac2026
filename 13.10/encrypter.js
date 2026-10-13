async function hash_string(string) {
    const string_bytes_array = new TextEncoder().encode(string)
    const hash_buffer = await crypto.subtle.digest("SHA-256", string_bytes_array)
    const hash_bytes_array = Array.from(new Uint8Array(hash_buffer))
    const hash = hash_bytes_array.map(el => el.toString(16).padStart(2, "0")).join("")

    return hash
}

const string = "jfiorifijower"

console.log(await hash_string(string))