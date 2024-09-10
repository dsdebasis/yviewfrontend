import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../index.js";
export const useVerifyResetPassLink = (data) => {
     
        console.error("error")
        const { passwordResetToken } = useParams();
        axios.post(`${backendUrl}/password-resetemail-verify/${passwordResetToken}`,{
                withCredentials: true,
                data:data
        })
              .then((res)=>{
               console.log(res)
              }).catch((error)=>{
                console.log(error)
              })
}