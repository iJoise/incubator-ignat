import axios from "axios";

export const requestAPI = {
   testRequest() {
      return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: true})
   }
}