import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f9cd515f5be843f4a907fd4d3a6bb1d0'
    }
})