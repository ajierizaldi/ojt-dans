const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'application/json' }
});

const Get = () => {
    return instance.get('/posts')
}

const GetById = (id) => {
    return instance.get(`/posts/${id}`)
}

const Post = () => {
    return instance.post('/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}

const Put = (id) => {
    return instance.put(`/posts/${id}`, {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}

const Delete = (id) => {
    return instance.delete(`/posts/${id}`)
}

const Patch = (id) => {
    return instance.patch(`/posts/${id}`, {
        title: 'foo',
    })
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete,
    Patch
}