import axios from "axios";
import queryString from "query-string";

const BASE_URL = 'http://192.168.31.177:8001/api'

const serverApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
})

export default serverApi