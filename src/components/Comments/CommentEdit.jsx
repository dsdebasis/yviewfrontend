import { MdEdit } from "react-icons/md";
import Button from "@mui/material/Button";
import AlertDialog from "../Modal/Modal";
function CommentEdit({ commentId, setClick, handleEdit, handleDelete, handleReject }) {


  return (
    <div
      className={`w-fit h-fit flex flex-col justify-between p-2  absolute top-8 right-0 left-[90%] lg:top-[70%] lg:left-[110%]`}
      onClick={setClick}
    >
      <Button variant="outlined" onClick={handleEdit} size="large">
        <MdEdit className="inline-block mr-3 "  />
      </Button>
      <div className=" mt-2">
        <AlertDialog
          alertName={"Delete Comment"}
         
          eventId={commentId}
          
          handleAccept={handleDelete}
          handleReject={handleReject}
        />
      </div>
    </div>
  );
}

export default CommentEdit;
