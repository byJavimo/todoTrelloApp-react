import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateTaskModal from '../UpdateTaskModal/UdateTaskModal.js';
import RemoveWarningModal from '../RemoveWarningModal/RemoveWarningModal.js';

const useStyles = makeStyles(() => ({
  root: {
    margin: 20
  },
  actions: {
      float: 'right'
  }
}));

export default function ItemCard({item, deleteAction, updateAction}) {
  const classes = useStyles();
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [openRemoveModal, setOpenRemoveModal] = React.useState(false);

  const openUpdateItemModal = () => {
    setOpenUpdateModal(true);
  };

  const closeUpdateItemModal = () => {
    setOpenUpdateModal(false);
  };

  const openRemoveItemModal = () => {
    setOpenRemoveModal(true);
  };

  const closeRemoveItemModal = () => {
    setOpenRemoveModal(false);
  };

  const deleteTask = () => {
    deleteAction(item.id);
  }

  return (
    <> 
      <RemoveWarningModal open={openRemoveModal} onHandleClose={closeRemoveItemModal} onRemoveItem={deleteTask}></RemoveWarningModal>
      <UpdateTaskModal open={openUpdateModal} onHandleClose={closeUpdateItemModal} onUpdateTask={updateAction}></UpdateTaskModal>
      <Card className={classes.root} id={item.id}>
        <CardHeader
          title={item.name}
          subheader={item.date}
        />

        <CardActions disableSpacing className={classes.actions}>
          <IconButton aria-label="edit" onClick={openUpdateItemModal}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={openRemoveItemModal}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}