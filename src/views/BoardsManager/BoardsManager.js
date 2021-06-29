import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import moment from 'moment';

import ItemCard from '../../components/ItemCard/ItemCard.js';
import CreateItemModal from '../../components/CreateItemModal/CreateItemModal.js';
import './BoardsManager.scss';

const BoardsManager = (props) => {
  const [open, setOpen] = React.useState(false);
  const [tasks, setTasks] = React.useState(
    [
      {
        id: 0,
        status: 0,
        name: 'Tarea 1',
        boardId: 1,
        date: '22/06/2021'
      },
      {
        id: 1,
        status: 2,
        name: 'Tarea 2',
        boardId: 1,
        date: '22/06/2021'
      },
      {
        id: 2,
        status: 2,
        name: 'Tarea 3',
        boardId: 2,
        date: '22/06/2021'
      },
      {
        id: 3,
        status: 2,
        name: 'Tarea 3',
        boardId: 1,
        date: '22/06/2021'
      }
    ]
  )


  React.useEffect(function() {
    return function getTasksByBoardId () {
       const newTasks = tasks.filter((task) => {
        if (task.boardId !== props.match.params.id) {
          return task;
        }
      });
      setTasks(newTasks);
      console.log(tasks)
    }
   
  },[props])



  const handleTaskCreation = (task) => {
    task.id = tasks.length + 1;
    task.date = moment(Date.now()).format("MMM Do YY");  
    tasks.push(task);
    setTasks(tasks);
  }

  const handleTaskRemoval = (taskId) => {
    const newTasks = tasks.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    })
    setTasks(newTasks);
  }

  const handleUpdateTask = (task) => {
    // const foundIndex = tasks.findIndex(x => x.id === task.id);
    const updatedTasks = [...tasks.filter( t => t.id !== task.id), task];
    // updatedTasks[foundIndex] = task;
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }
  
  const handleOpenCreateTaskModal = () => {
    setOpen(true);
  };

  const handleCloseCreateTaskModal = () => {
    setOpen(false);
  };

  const hasTasks = () => {
    return tasks.length > 0;
  }
  
  const mapTasksByStatus = (status) => {
    return tasks.map((item, key) => {
      if (item.status === status) {
        return <ItemCard key={key}
                         item={item}
                         deleteAction={handleTaskRemoval}
                         updateAction={handleUpdateTask}></ItemCard>
      }
    })

  }
    return (
      <div className='boards-manager'>
        <CreateItemModal open={open} onHandleClose={handleCloseCreateTaskModal} onCreateTask={handleTaskCreation}/>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                <div className="tasks-list">
                  {mapTasksByStatus(0).length >= 1 ? mapTasksByStatus(0) : <p> No items </p>}
                </div>
              </Grid>
              <Grid item xs={4} className="tasks-colum">
                <h2> In progress </h2>
                <div className="tasks-list">
                  {mapTasksByStatus(1).length >= 1  ? mapTasksByStatus(1) : <p> No items </p>}
                </div>
              </Grid>
              <Grid item xs={4} className="tasks-colum">
                <h2> Done </h2>
                <div className="tasks-list">
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