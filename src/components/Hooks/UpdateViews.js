import axios from "axios";
import {videoApi} from "../index.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdateViews = () => {
        const {videoid} = useParams();
        axios.post(`${videoApi}/update-views/${videoid}`,{},{
                withCredentials: true,
              }).then((res)=>{
              //  console.log(res)
              }).catch((error)=>{
                console.log(error)
              })
}

export {UpdateViews}