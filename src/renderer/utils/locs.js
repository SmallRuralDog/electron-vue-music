export default {
    get(name) {
        let value = localStorage.getItem(name)
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
        return value
    },
    set(name, value) {
        if (typeof value === typeof {}) value = JSON.stringify(value)
        return localStorage.setItem(name, value)
    },
    remove(name) {
        return localStorage.removeItem(name)
    }
}