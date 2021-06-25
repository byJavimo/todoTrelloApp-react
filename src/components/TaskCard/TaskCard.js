import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateTaskModal from '../../components/UpdateTaskModal/UdateTaskModal.js';

const useStyles = makeStyles(() => ({
  root: {
    margin: 20
  },
  actions: {
      float: 'right'
  }
}));

export default function TaskCard({taskName, taskDate}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const openUpdateTaskModal = () => {
    setOpen(true);
  };

  const closeUpdateTaskModal = () => {
    setOpen(false);
  };
  
  const deleteTask = () => {
    console.log('Delete task!');
  };



  return (
    <>
      <UpdateTaskModal open={open} onHandleClose={closeUpdateTaskModal}></UpdateTaskModal>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={taskName}
          subheader={taskDate}
        />

        <CardActions disableSpacing className={classes.actions}>
          <IconButton aria-label="edit" onClick={openUpdateTaskModal}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}