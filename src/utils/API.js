import axios from "axios"

const API = {
    getAllFish: function() {
        return axios.get("http://localhost:8080/api/fishes")
    }
}

export default API