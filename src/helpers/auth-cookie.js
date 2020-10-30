const getCookie = cookie => {
    const cookies = {}
    const cookiesString = document.cookie.split("; ")
    cookiesString.forEach(c => {
        let [name, value] = c.split("=")
        cookies[name] = value
    })
    return cookies[cookie]
}

export default getCookie