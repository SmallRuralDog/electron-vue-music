import http from '../utils/http'

//手机登录
export function login(phone, password) {
    return http.get('/login/cellphone?phone=' + phone + '&password=' + password)
}

export function banner() {
    return http.get('/banner')
}

export function personalized() {
    return http.get('/personalized')
}

export function getPlaylistDetail(id) {
    return http.get('/playlist/detail?id=' + id)
}

export function like(id) {
    return http.get('/like?id=' + id)
}


