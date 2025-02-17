import { MdEdit } from "react-icons/md";

import AlertDialog from "../Modal/Modal";
function CommentEdit({id,setClick,handleEdit,handleDelete,handleReject}) {

  return (
    <div className= {`w-fit h-fit flex flex-col justify-between p-2  absolute top-8 right-0 bg-gradient-to-b lg:top-[70%] lg:right-11`} onClick={setClick} >
     
      <div className="flex justify-between bg-blue-600">
        <button onClick={handleEdit} className="  w-full p-2 ">
          <MdEdit className="inline-block mr-3 " />
          Edit 
        </button>
      </div>
      <div className=" mt-2" >
        <AlertDialog  alertName={"Delete"} alertDetails={"Are you sure you want to delete this video ?"} eventId = {id} handleAccept={handleDelete} handleReject={handleReject}/>
      </div>
    </div>
  );
}

export default CommentEdit;
