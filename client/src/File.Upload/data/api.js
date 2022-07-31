import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/api"

export const singleFileUpload = async (data) => {
    try {
        await axios.post('/singleFile', data)
    } catch (error) {
        throw error
    }
}

export const getSingleFiles = async () => {
    try {
        const { data } = await axios.post('/getSingleFiles')
        return data
    } catch (error) {
        throw error
    }
}

export const MultipleFileUpload = async (data) => {
    try {
        await axios.post('/multipleFiles', data)
    } catch (error) {
        throw error
    }
}

export const getMultipleFiles = async () => {
    try {
        const {data} = await axios.get('/getMultipleFiles')
        return data
    } catch (error) {
        throw error
    }
}