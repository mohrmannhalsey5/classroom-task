import { useState } from 'react';
import axios from 'axios';

const ClassroomTask = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://example.com/tasks');
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Classroom Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
