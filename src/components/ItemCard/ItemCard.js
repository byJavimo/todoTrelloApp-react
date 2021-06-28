import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateTaskModal from '../UpdateTaskModal/UdateTaskModal.js';

const useStyles = makeStyles(() => ({
  root: {
    margin: 20
  },
  actions: {
      float: 'right'
  }
}));

export default function TaskCard(props) {
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
          title={props.name}
          subheader={props.date}
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