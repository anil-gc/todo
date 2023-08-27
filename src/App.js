import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    // State to hold the list of tasks
    const [tasks, setTasks] = useState([]);
    // State to hold the new task input
    const [newTask, setNewTask] = useState('');
    //
  
    // Function to add a new task to the list
    const addTask = () => {
      if (newTask.trim() !== '') {
        // Use spread operator to create a new array with the new task added
        setTasks([...tasks, newTask]);
        // Clear the input field after adding the task
        setNewTask('');
      }
    };
  
    // Function to remove a task from the list
    const removeTask = (index) => {
      // Filter out the task at the specified index to create a new array without it
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        {/* Input field for new tasks */}
        <input type="text" placeholder="Enter a new task" value={newTask}
          // Update the newTask state as the user types
          onChange={(e) => setNewTask(e.target.value)}
        />


        {/* Button to add a task */}


        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {/* Map through tasks and display each one */}
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Display task */}
            {task}
            {/* Button to remove task */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
