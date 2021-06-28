import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import ItemCard from '../../components/ItemCard/ItemCard.js';
import CreateTaskModal from '../../components/CreateTaskModal/CreateTaskModal.js';
import './BoardsManager.scss';

const BoardsManager = () => {
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

  // const tasks = [
  //   {
  //     id: 0,
  //     status: 0,
  //     name: 'Tarea 1',
  //     boardId: 1,
  //     date: '22/06/2021'
  //   },
  //   {
  //     id: 2,
  //     status: 2,
  //     name: 'Tarea 2',
  //     boardId: 1,
  //     date: '22/06/2021'
  //   },
  //   {
  //     id: 2,
  //     status: 2,
  //     name: 'Tarea 3',
  //     boardId: 1,
  //     date: '22/06/2021'
  //   },
  //   {
  //     id: 2,
  //     status: 2,
  //     name: 'Tarea 3',
  //     boardId: 1,
  //     date: '22/06/2021'
  //   }
  // ]

  const tasks = [];

  const hasTasks = () => {
    return tasks.length > 0;
  }
  
  const mapTasksByStatus = (status) => {
    console.log(status);
    return tasks.map((item) => {
      if (item.status === status) {
        return <ItemCard name={item.name} date={item.date}></ItemCard>
      }
    })

  }

    return (
      <div className='boards-manager'>
        <CreateTaskModal open={open} onHandleClose={handleCloseCreateTaskModal}/>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl className="select-board-input">
              <InputLabel id="board-simple-select-label">Select board</InputLabel>
              <Select
                labelId="board-simple-select-label"
                id="board-simple-select"
                value={board}
                onChange={selectBoard}
              >
                <MenuItem value={1}> Tablero 1</MenuItem>
                <MenuItem value={2}> Board 2</MenuItem>
                <MenuItem value={3}> Board 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained" 
              size="large"
              className='add-task-button'
              startIcon={<AddCircleIcon />}
              onClick={handleOpenCreateTaskModal}>
              Add task
            </Button>
          </Grid>
          {hasTasks() ? 
          <Grid container>
              <Grid item xs={4} className="tasks-colum">
                <h2> Todo </h2>
                <div class="tasks-list">
                  {mapTasksByStatus(0).length >= 1 ? mapTasksByStatus(0) : <p> No items </p>}
                </div>
              </Grid>
              <Grid item xs={4} className="tasks-colum">
                <h2> In progress </h2>
                <div class="tasks-list">
                  {mapTasksByStatus(1).length >= 1  ? mapTasksByStatus(1) : <p> No items </p>}
                </div>
              </Grid>
              <Grid item xs={4} className="tasks-colum">
                <h2> Done </h2>
                <div class="tasks-list">
                  {mapTasksByStatus(2).length >= 1 ? mapTasksByStatus(2) : <p> No items </p>}
                </div>
              </Grid>
            </Grid> :
            <Grid container>
              <Grid item xs={12}>
                <br></br>
                <h1> No items to show </h1>
              </Grid>
            </Grid>
            }

        </Grid>
    </div>
    );
  }
  export default BoardsManager;