import ItemCard from '../../components/ItemCard/ItemCard.js';
import './Home.scss';

const Home = () => {
    const deleteTask = (event) => {
      console.log('Delete task', event.target.value);
    };

    const updateTask = (event) => {
      console.log('Update task', event.target.value);
    };

    const boards = [];

    const hasBoards = () => {
      return boards.length;
    }

    return (
      <div>
        <h1> Home </h1>
        {hasBoards() ?
          <div className="card">
            <ItemCard  name="Tarea 1" date="Hola" deleteAction={deleteTask} updateAction={updateTask}/>
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