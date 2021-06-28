import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    title: {
        color: 'red'
    }
  }));
  
  export default function RemoveWarningModal({open, onHandleClose, onRemoveItem}) {
    const classes = useStyles();

    const deleteTask = (event) => {
      onRemoveItem();
      onHandleClose();
    }

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);  

    return (
      <div>
        <Modal
          id="create-task-modal"
          open={open}
          onClose={onHandleClose}
          aria-labelledby="create-task-modal-title"
        >
          <div style={modalStyle}  className={classes.modal}>
            <h2 id="create-task-modal-title">Remove task</h2>
            <div className="full-width">
                <h3 className={classes.title}> Are you sure you want to remove this item? </h3>
            </div>
            <div className="full-width">
                <Button onClick={deleteTask}> 
                    Accept
                </Button>
                <Button onClick={onHandleClose}> 
                    Cancel
                </Button>
            </div>
            <RemoveWarningModal />
          </div>
        </Modal>
      </div>
    );
  }