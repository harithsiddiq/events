import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/rbuchberger/real-world-vue',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
  });

  export default {
    getEvents() {
        return instance.get('/events')
    },
    getEvent(id) {
        return instance.get(`/events/${id}`)
    }
  }