import axios from 'axios'

const baseUrl = 'https://home-pages-backend.herokuapp.com/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }