// import logo from './logo.svg';
// import './App.css';
import { TodoList, Greeting } from "./components";


import React, { useState, useEffect } from 'react';




const App = () => {
  const [greetingMessage, setGreetingMessage] = useState('');
  const [dynamicMessage, setDynamicMessage] = useState('');
  const [allTasksDone, setAllTasksDone] = useState(false);
  const [tasks, setTasks] = useState([]);



  const updateGreeting = (completedTasksCount) => {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 4 && currentHour < 12) {
      greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }
  
    if (completedTasksCount === 0 || tasks.length === 0) {
      setDynamicMessage(`${greeting} Let's get some tasks done!`);
    } else if (completedTasksCount < 2 && !allTasksDone) {
      setDynamicMessage(`${greeting} Lets get more productive`);
      setAllTasksDone(true); // Set allTasksDone to true when all are done
    } else if(completedTasksCount >= 3 && !allTasksDone) {
      setDynamicMessage(`${greeting} You're making great progress!`);
      setAllTasksDone(false); // Reset allTasksDone to false
    }
  };

  return (
    <div>
      <Greeting message={greetingMessage + dynamicMessage} />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        onUpdateCompletedTasks={updateGreeting}
        onAllTasksCompleted={setAllTasksDone}
      />
    </div>
  );
};

export default App;
