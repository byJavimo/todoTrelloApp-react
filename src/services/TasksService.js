const mockedTasks = [
    {
      id: 0,
      status: 0,
      name: 'Tarea 1',
      boardId: 1,
      date: Date.now()
    },
    {
      id: 1,
      status: 2,
      name: 'Tarea 2',
      boardId: 1,
      date: Date.now()
    },
    {
      id: 2,
      status: 2,
      name: 'Tarea 3',
      boardId: 2,
      date: Date.now()
    },
    {
      id: 3,
      status: 2,
      name: 'Tarea 3',
      boardId: 1,
      date: Date.now()
    }
  ]

  const TasksService = {
    getTasks: function() {
        return mockedTasks;
    },
    getTasksByBoardId: function (id) {
      return [...mockedTasks.filter(t => t.boardId === +id)];
    }
  }
  
  export default TasksService;
  