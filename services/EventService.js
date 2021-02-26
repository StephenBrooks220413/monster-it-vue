import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/StephenBrooks220413/real-world-vue1/events',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    name: EventService,
    getEvents() {
        return apiClient.get('/events')
    }
}
