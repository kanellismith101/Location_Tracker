import axios from "axios";

export default axios.create({
  baseURL: " http://3b7a6da3d05c.ngrok.io", // Changes every 8 hours 
});

//run cmd ngrok http 3000