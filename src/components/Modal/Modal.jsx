import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDelete } from 'react-icons/md';

export default function AlertDialog({eventId,alertName,alertDetails,handleAccept,handleReject}) {
  const [open, setOpen] = React.useState(false);
 
  console.log("eventId",eventId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
      <Button variant="outlined" size='large' onClick={handleClickOpen} >
       <MdDelete className='inline-block mr-3'/> 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{border:"1px solid red"}}

      >
        <DialogTitle id="alert-dialog-title">
          {"Delete your Video?"}
        </DialogTitle>
       
        <DialogActions>
          <Button id={eventId} onClick={handleReject}>Cancel Delete</Button>
          <Button onClick={handleAccept} autoFocus id={eventId}>
           Delete 
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
