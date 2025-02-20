import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../index.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {login as authLogin} from '../../store/authSlice.js'
 const uselogin = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };
  const handleLogin = function (e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${backendUrl}/login`, userInfo, config)
      .then((res) => {
        dispatch(authLogin(res?.data?.data.msg));
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message || "server is not connected"
        );
      })
      .finally(() => {
        setLoading(false);
        setUserInfo({});
      });
  };

  return { handleLogin, userInfo, setUserInfo, loading, setLoading };
};


export default uselogin;