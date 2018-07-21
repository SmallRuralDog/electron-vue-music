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

export function getPlaylistHot() {
    return http.get('/playlist/hot')
}

export function getTopPlaylistHighquality(cat = '全部', limit = 30) {
    return http.get('/top/playlist/highquality?cat=' + cat + "&limit=" + limit)
}

export function like(id) {
    return http.get('/like?id=' + id)
}

export function toplist(idx) {
    return http.get('/top/list?idx=' + idx)
}

export function getSongDetail(ids) {
    return http.get('/song/detail?ids=' + ids)
}

export function getMusicUrl(id, br = 999000) {
    return http.get('/music/url?id=' + id + '&br=' + br)
}

