import ItemCard from '../../components/ItemCard/ItemCard.js';
import './Home.scss';

const Home = () => {
    const deleteBoard= (event) => {
      console.log('Delete task', event.target.value);
    };

    const updateBoard= (event) => {
      console.log('Update task', event.target.value);
    };

    const boards = [
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
    ];

    const hasBoards = () => {
      return boards.length;
    }

    const mapBoards = () => {
      return boards.map((board) => {
        return <ItemCard name={board.name}  deleteAction={deleteBoard} updateAction={updateBoard} />;
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