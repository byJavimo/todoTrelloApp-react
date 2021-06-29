import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    selectLabel: {
      color: '#60afdd'
    },
    select: {
      width: 350,
      margin: theme.spacing(1)
    },
    input: {
      width: 350,
      margin: theme.spacing(1)
    },
    button: {
      float: 'right',
      color: '#fff',
      backgroundColor: '#60afdd',
      margin: theme.spacing(1)
    }
  }));
  
  export default function UpdateTaskModal({open, item, onHandleClose, showStatusSection, onUpdateTask}) {
    const classes = useStyles();
    const [status, setStatus] = React.useState(0);
    let [taskName, setTaskName] = React.useState('');

    const selectStatus = (event) => {
      setStatus(event.target.value);
    };

    const handleChange = (event) => {
      taskName = event.target.value;
      setTaskName(taskName);
    }

    const updateTask = () => {
      if (item) {
          item.name = taskName ? taskName : item.name;
          item.status = status;
          onUpdateTask(item);
      }
      onHandleClose();
    }

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="update-task-modal-title">Update</h2>
        <form>
              {
                showStatusSection ? 
                <FormControl fullWidth margin="dense">
                <InputLabel id="status-simple-select-label" className={classes.selectLabel}>Select status</InputLabel>
                <Select
                  labelId="status-simple-select-label"
                  id="status-simple-select"
                  value={status}
                  onChange={selectStatus}
                >
                  <MenuItem value={0}> Todo </MenuItem>
                  <MenuItem value={1}> In progress</MenuItem>
                  <MenuItem value={2}> Done </MenuItem>
                </Select>
                </FormControl>
                :
                ''
              }
              
              <br></br>
              <Input fullWidth onChange={handleChange} placeholder="Change task name..."></Input>

              <Button className={classes.button} onClick={updateTask}> 
                Update
              </Button>
            </form>
        <UpdateTaskModal />
      </div>
    );
  
    return (
      <div>
        <Modal
          open={open}
          onClose={onHandleClose}
          aria-labelledby="update-task-modal-title"
          id="update-task-modal"
        >
          {body}
        </Modal>
      </div>
    );
  }