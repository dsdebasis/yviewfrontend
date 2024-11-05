import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function CommentEdit() {

  const [edit, setEdit] = React.useState(false);

  
  return (
    <div className="w-[100px] h-[10vh] flex flex-col justify-between p-2 rounded-lg shadow-2xl bg-gradient-to-tr  from-slate-500 to-slate-700 absolute top-8 right-0 ">
      {/* {edit && <h1>edit</h1>} */}
      <div className="flex justify-between">
        <button onClick={() => setEdit(!edit)}>
          <MdEdit className="inline-block mr-3" />
          Edit 
        </button>
      </div>
      <div className="">
        <button>
          <MdDelete className="inline-block mr-3" />
          Delete
        </button>
      </div>
    </div>
  );
}

export default CommentEdit;
