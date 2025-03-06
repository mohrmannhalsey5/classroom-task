import { useState } from 'react';

function ClassroomTask() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const priority = event.target.priority.value;
    if (task && priority) {
      setTasks((prevTasks) => [...prevTasks, { task, priority }]);
      event.target.task.value = '';
      event.target.priority.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input type="text" name="task" />
      <br />
      <label>Priority:</label>
      <select name="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <button type="submit">Add Task</button>
      <h2>Tasks:</h2>
      {tasks.map((task) => (
        <div key={task.priority}>{task.task}</div>
      ))}
    </form>
  );
}
