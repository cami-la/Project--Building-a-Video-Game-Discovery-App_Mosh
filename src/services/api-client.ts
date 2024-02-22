import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28e8e0ab5b0d4d2099817793cd35fe9b"
  },
});