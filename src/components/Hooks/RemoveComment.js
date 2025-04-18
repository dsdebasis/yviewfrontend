import axios from "axios";
import { backendUrl } from "../index.js";
import toast from "react-hot-toast";
const RemoveComment = function (e) {
  console.log(e.target.id);
  axios
    .delete(`${backendUrl}/comments/${e?.target?.id}`,{
      withCredentials: true
    })
    .then((res) => {
      console.log(res,res?.data);
      toast.success("Comment Removed")
    })
    .catch((err) => {
      console.log(err.response.data.message);
      toast.error(err?.response?.data?.message || "error while removing comment");
    });
};
export default RemoveComment;