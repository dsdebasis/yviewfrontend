import axios from "axios";
import { backendUrl } from "./index.js";


let res, error;

let FetchVideos = async function() {
    console.log("called the function")
  try {
   res = await axios.get(`${backendUrl}/getvideos`)
  //  console.log("result",res.data)
   return res.data
  } catch (error) {
    error = error
    // console.log("error",error)
    return error
  }
}



export  {FetchVideos};
