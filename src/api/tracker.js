import axios from "axios";

export default axios.create({
  baseURL: "http://66ae576b4e1b.ngrok.io", // Changes every 8 hours
});

//run cmd 'ngrok http 3000'