
import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    } else {
      alert('Please enter a task!');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    updateCompletedCount(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    updateCompletedCount(updatedTasks);
  };

  const handleClearAll = () => {
    setTasks([]);
    setCompletedCount(0);
  };

  const updateCompletedCount = (tasks) => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    setCompletedCount(completedTasks);
  };

  return (
    <div className="todo">
      <div className="container">
        <div className="content">
          <h2>Todo List</h2>
          <input
            type="text"
            className="input-form"
            placeholder="Enter Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" onClick={handleAddTask}>
            ADD
          </button>
          <ul className="ul-list">
            {tasks.map((task, index) => (
              <li key={index} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span>{task.text}</span>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <button className="clearlist" onClick={handleClearAll}>
            Clear All
          </button>
          <p style={{ color: 'antiquewhite' }}>
            Completed tasks: <span className="completed-count">{completedCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
