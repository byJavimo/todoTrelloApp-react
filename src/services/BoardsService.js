const axios = require('axios');

const BoardsService = {
  getBoards: function() {
    return axios.get('http://localhost:3000/boards');
  }
};

export default BoardsService;
