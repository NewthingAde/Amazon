import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-challenge-d4344.cloudfunctions.net/api"
  //"http://localhost:5001/clone-challenge-d4344/us-central1/api",
  //THE API (cloud function URL)
});

export default instance;
 