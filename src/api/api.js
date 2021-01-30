import * as axios from 'axios'

const instanse = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6cbf589d-4d05-47b8-9126-20d223e52024'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export function getUsers(currentPage, pageSize) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}


export function getProfile(userId) {
    return instanse.get(`profile/${userId}`)
        .then(response => response.data);
}

export function unfollowAPI(userId) {
    return instanse.delete(`follow/${userId}`);
}

export function followAPI(userId) {
    return instanse.post(`follow/${userId}`);
}

export const authAPI = {
    me() { return instanse.get(`auth/me`) }
}