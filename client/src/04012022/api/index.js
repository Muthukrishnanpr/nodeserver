import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000/aadhithya"


export const fetchPosts = () => { axios.get('/') }