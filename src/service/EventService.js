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
    getEvents(perPage, page) {
        return instance.get(`/events?_limit=${perPage}&_page=${page}`);
    },
    getEvent(id) {
        return instance.get(`/events/${id}`)
    }
  }