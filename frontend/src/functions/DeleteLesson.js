import axios from "axios";
import { constructUrl } from "./UrlConstructor";

export const deleteLesson = (id, apiUrl) =>{
    var url = constructUrl(apiUrl, ["deleteLesson" ])
    var session_id = localStorage.getItem('session_id')
    axios({
        method: 'post', 
        url: url, 
        secure: true,
        headers: {},
        data: {
            id:id,
            session_id : session_id
        }
    })
      .then(response => {
       return({
            submitStatus: response.data.status,
            apiMessage: response.data.message
          });
      })
      .catch(error => {
        return({
            submitStatus: false,
            message: "Cannot do request to API. Try again later"
          });
      })
}