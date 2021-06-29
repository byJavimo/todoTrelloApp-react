
import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard.js';
import BoardsService from "../../services/BoardsService.js";
import CreateItemModal from '../../components/CreateItemModal/CreateItemModal.js';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './Home.scss';

const Home = (props) => {
  const [open, setOpen] = React.useState(false);
  const [boards, setBoards] = React.useState([]);
  
    React.useEffect(() => {
      try {
        BoardsService.getBoards().then((response) => {
          console.log(response.data.results);
          setBoards(response.data);
        });
      } catch (error) {
        alert(error.message);
      }
    },[]);
    const handleBoardCreation = (board) => {
      board.id = boards.length + 1;
      board.date = Date.now()
      boards.push(board);
      setBoards(boards);
    }

    const handleOpenCreateBoardModal = () => {
      setOpen(true);
    };

    const handleCloseCreateBoardModal = () => {
      setOpen(false);
    }

    const goTo = (id) => {
      props.history.push('/boards-manager/' + id);
    }
  
    const handleUpdateBoard = (board) => {
      const foundIndex = boards.findIndex(x => x.id === board.id);
      board[foundIndex] = board;
      setBoards(boards);
    }
  
    const handleBoardRemoval = (boardId) => {
      const newBoards = boards.filter((board) => {
        if (board.id !== boardId) {
          return board;
        }
      })
      setBoards(newBoards);
    }

    const hasBoards = () => {
      return boards.length;
    }

    const mapBoards = () => {
      return boards.map((board, key) => {
        return <ItemCard key={key} item={board} goTo={goTo} deleteAction={handleBoardRemoval} updateAction={handleUpdateBoard} allowRedirection={true}/>;
      })
    }

    return (
      <>
        <CreateItemModal open={open} onHandleClose={handleCloseCreateBoardModal} onCreateTask={handleBoardCreation}/>
        <h1> Home </h1>
            <Button
              variant="contained" 
              size="large"
              className='add-board-button'
              startIcon={<AddCircleIcon />}
              onClick={handleOpenCreateBoardModal}>
                Add board
            </Button>
        {hasBoards() ?
          <div className="card">
            
            {mapBoards()}
            <br></br>
          </div>
        :
          <h1> 
            No boards to show
          </h1>
        }
      </>
    );
  }
  export default Home;