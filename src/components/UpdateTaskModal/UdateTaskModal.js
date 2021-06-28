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
    }
  }));
  
  export default function UpdateTaskModal({open, task, onHandleClose, onUpdateTask}) {
    const classes = useStyles();
    const [status, setStatus] = React.useState(0);
    const [taskName, setTaskName] = React.useState('');

    const selectStatus = (event) => {
      setStatus(event.target.value);
    };

    const handleChange = (event) => {
      task.name = event.target.value;
      setTaskName(taskName);
    }

    const updateTask = () => {
      if (task) {
          task.status = status;
          onUpdateTask(task);
      }
      onHandleClose();
    }

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="update-task-modal-title">Update task</h2>
        <form>
              <div className="full-width">
                <FormControl className="select-board-input">
                <InputLabel id="status-simple-select-label">Select status</InputLabel>
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
              </div>
              <div className="full-width">
                <Input className="input-field-task-name" onChange={handleChange} placeholder="Enter task"></Input>
              </div>
              <div className="full-width">
                <Button onClick={updateTask}> 
                  Update
                </Button>
              </div>
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