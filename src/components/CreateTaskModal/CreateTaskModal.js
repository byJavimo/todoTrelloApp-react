import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }));
  
  export default function CreateTaskModal({open, onHandleClose}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="create-task-modal-title">Add task</h2>
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="input-field-task" label="Enter your task" variant="outlined" />
        </form>
        <CreateTaskModal />
      </div>
    );
  
    return (
      <div>
        <Modal
          open={open}
          onClose={onHandleClose}
          aria-labelledby="create-task-modal-title"
          id="create-task-modal"
        >
          {body}
        </Modal>
      </div>
    );
  }