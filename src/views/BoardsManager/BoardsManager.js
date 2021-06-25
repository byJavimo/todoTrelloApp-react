import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import TaskCard from '../../components/TaskCard/TaskCard.js';
import CreateTaskModal from '../../components/CreateTaskModal/CreateTaskModal.js';
import './BoardsManager.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  formControl: {
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  },
}));

const BoardsManager = () => {
  const classes = useStyles();
  const [board, setBoard] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const selectBoard = (event) => {
    setBoard(event.target.value);
  };

  const handleOpenCreateTaskModal = () => {
    setOpen(true);
  };

  const handleCloseCreateTaskModal = () => {
    setOpen(false);
  };

  const deleteTask = (event) => {
    console.log('Delete task', event.target.value);
  };

  const updateTask = (event) => {
    console.log('Update task', event.target.value);
  };

    return (

      <div className={classes.root}>
        <CreateTaskModal open={open} onHandleClose={handleCloseCreateTaskModal}/>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div class="select-board-input">
              <FormControl className={classes.formControl}>
                <InputLabel id="board-simple-select-label">Select board</InputLabel>
                <Select
                  labelId="board-simple-select-label"
                  id="board-simple-select"
                  value={board}
                  onChange={selectBoard}
                >
                  <MenuItem value={1}>Tablero 1</MenuItem>
                  <MenuItem value={2}> Board 2</MenuItem>
                  <MenuItem value={3}> Board 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained" 
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<AddCircleIcon />}
              onClick={handleOpenCreateTaskModal}>
              Add task
            </Button>
          </Grid>
          <Grid item xs={4} className="tasks-colum">
            <h2> Todo </h2>
            <div class="tasks-list">
              <TaskCard taskName="Tarea 1" taskDate="Hola" deleteAction={deleteTask} updateAction={updateTask}/>
            </div>
          </Grid>
          <Grid item xs={4} className="tasks-colum">
            <h2> In progress </h2>
            <div class="tasks-list">
              <TaskCard taskName="Tarea 1" taskDate="Hola" />
            </div>
          </Grid>
          <Grid item xs={4} className="tasks-colum">
            <h2> Done </h2>
            <div class="tasks-list">
              <TaskCard taskName="Tarea 1" taskDate="Hola" />
            </div>
          </Grid>
        </Grid>
    </div>
    );
  }
  export default BoardsManager;