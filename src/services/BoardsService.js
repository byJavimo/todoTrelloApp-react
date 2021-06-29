const mockedBoards = [
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
] 

const BoardsService = {

  getBoards: function() {
      return mockedBoards;
  }
};

export default BoardsService;
