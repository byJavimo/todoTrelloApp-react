
import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard.js';
import './Home.scss';

const Home = () => {
  const [boards, setBoards] = React.useState([
      {
        id: 0,
        name: 'Tablero 1'
      },
      {
        id: 1,
        name: 'Tablero 2'
      },
      {
        id: 2,
        name: 'Tablero 3'
      }
  ]);

    // const handleTaskCreation = (task) => {
    //   task.id = tasks.length + 1;
    //   task.date = Date.now()
    //   tasks.push(task);
    //   setTasks(tasks);
    // }
  
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
        return <ItemCard key={key} item={board}  deleteAction={handleBoardRemoval} updateAction={handleUpdateBoard} />;
      })
    }

    return (
      <div>
        <h1> Home </h1>
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
  
      </div>
    );
  }
  export default Home;