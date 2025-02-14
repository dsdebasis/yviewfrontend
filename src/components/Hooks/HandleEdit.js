import { useNavigate } from "react-router-dom";
const HanleEdit = (e) => {
    const navigate = useNavigate();
    console.log(e.target.id)    
    navigate("/editvideo/:videoid")
};

export default HanleEdit