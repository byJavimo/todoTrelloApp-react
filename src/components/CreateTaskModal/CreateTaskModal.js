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
    }
  }));
  
  export default function CreateTaskModal({open, onHandleClose, onCreateTask}) {
    const classes = useStyles();
    const [task, setTask] = React.useState({});
    const [status, setStatus] = React.useState(0);
  
    const handleChange = (event) => {
      task.name = event.target.value;
      setTask(task);
    }

    const selectStatus = (event) => {
      setStatus(event.target.value);
    };

    const createTask = (event) => {
      if (task.name) {
          task.status = status;
          task.boardId = 1;
          onCreateTask(task);
          setTask({});
      }
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
            <h2 id="create-task-modal-title">Add task</h2>
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
                <Button onClick={createTask}>
                  Send
                </Button>
              </div>
            </form>
            <CreateTaskModal />
          </div>
        </Modal>
      </div>
    );
  }