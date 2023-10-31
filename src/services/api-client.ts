import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b9f6467141294f5f975ad360593b85f7'
    }
})