import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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
    },
    buttonSucccess: {
      float: 'right',
      color: '#fff',
      backgroundColor: '#60afdd',
      margin: theme.spacing(1)
    },
    buttonDanger: {
      float: 'right',
      color: '#fff',
      backgroundColor: 'red',
      margin: theme.spacing(1)
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
              <h3 className={classes.title}> Are you sure you want to remove this item? </h3>
              <Button onClick={deleteTask} className={classes.buttonSucccess} variant="contained"> 
                  Accept
              </Button>
              <Button onClick={onHandleClose} className={classes.buttonDanger} variant="contained"> 
                  Cancel
              </Button>
            <RemoveWarningModal />
          </div>
        </Modal>
      </div>
    );
  }