import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6cbf589d-4d05-47b8-9126-20d223e52024'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export function getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}


export function getProfile(userId) {
    console.log('use profileAPI object');
    return profileAPI.getProfile(userId);
}

export function unfollowAPI(userId) {
    return instance.delete(`follow/${userId}`);
}

export function followAPI(userId) {
    return instance.post(`follow/${userId}`);
}

export const authAPI = {
    me() { return instance.get(`auth/me`) }
}

export function setStatus(status) {
    console.log('use profileAPI object');
    return profileAPI.setStatus(status);
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    }
}