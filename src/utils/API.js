import axios from "axios";
// const BASEURL = "http//localhost:3001/";

export default {
  route: function(query) {
    let config = {
      headers: { 'Access-Control-Allow-Origin': '*'}
    }

    console.log('call')
    return axios.get("auth/test",config)  
  }
}