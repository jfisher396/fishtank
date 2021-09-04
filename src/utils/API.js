import axios from "axios";

const API = {
  // retrieves all fish from DB
  getAllFish: function () {
    return axios.get("http://localhost:8080/api/fishes");
  },

  // saves user created fish to DB
  saveFish: function (fishData) {
    return axios.post("http://localhost:8080/api/fishes", fishData);
  },

  
};

export default API;
