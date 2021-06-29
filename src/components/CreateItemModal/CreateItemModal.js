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
  
  export default function CreateTaskModal({open, onHandleClose, onCreateTask, showStatusSection}) {
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
          task.boardId = 1
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
          <div style={modalStyle}  className={classes.paper}>
            <h2 id="create-task-modal-title">Create</h2>
            <form>
              {showStatusSection ? 
                <FormControl className={classes.select}>
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
                </FormControl> :
                ''
              }
     
              <Input className={classes.input} onChange={handleChange} placeholder="Enter task"></Input>           
              <Button className={classes.button} onClick={createTask} variant="contained">
                Create
              </Button>
            </form>
            <CreateTaskModal />
          </div>
        </Modal>
      </div>
    );
  }