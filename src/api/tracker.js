import axios from "axios";

export default axios.create({
  baseURL: "http://e6c8c68b7c22.ngrok.io", // Changes every 8 hours
});

//run cmd 'ngrok http 3000'