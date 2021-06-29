const axios = require('axios');

const TasksService = {
  getTasks: function() {
    return axios.get('http://localhost:3000/tasks');
  },
  getTasksByBoardId: function (id, tasks) {
    return [...tasks.filter(t => t.boardId === +id)];
  }
}
  
export default TasksService;
  