// import logo from './logo.svg';
// import './App.css';
import { TodoList, Greeting } from "./components";

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';


// const App = () => {
//   const [completedTasks, setCompletedTasks] = useState(0);

//   // const [tasks, setTasks] = useState([]);
//   const [completedTasksCount, setCompletedTasksCount] = useState(0);
//   const [greetingMessage, setGreetingMessage] = useState('');

//   useEffect(() => {
//     // Determine greeting based on time and completed tasks
//     const currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour >= 4 && currentHour < 12) {
//       greeting = 'Good morning!';
//     } else if (currentHour >= 12 && currentHour < 17) {
//       greeting = 'Good afternoon!';
//     } else {
//       greeting = 'Good evening!';
//     }

//     if (completedTasksCount > 0) {
//       greeting += ' You\'re making great progress!';
//     } else {
//       greeting += ' Let\'s get productive!';
//     }

//     setGreetingMessage(greeting);
//   }, [completedTasksCount]);

//   const updateCompletedTasks = (count) => {
//     setCompletedTasks(count);
//   };

//   return (
//     <div>
//       {/* <Greeting completedTasks={completedTasks} /> */}
//       <Greeting message={greetingMessage} />
//       <TodoList onUpdateCompletedTasks={updateCompletedTasks} />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';

// const App = () => {
//   // const [tasks, setTasks] = useState([]); // Assuming this state is still needed
//   const [greetingMessage, setGreetingMessage] = useState('');

//   useEffect(() => {
//     // Determine greeting based on time and completed tasks directly from TodoList
//     const currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour >= 4 && currentHour < 12) {
//       greeting = "Good morning! Let's complete some tasks.";
//     } else if (currentHour >= 12 && currentHour < 17) {
//       greeting = 'Good afternoon!';
//     } else {
//       greeting = 'Good evening!';
//     }

//     setGreetingMessage(greeting);
//   }, []); // Empty dependency array to run only once on mount

//   const updateGreeting = (completedTasksCount) => {
//     if (completedTasksCount > 0) {
//       setGreetingMessage(greetingMessage + ' You\'re making great progress!');
//     } else {
//       setGreetingMessage(greetingMessage + ' Let\'s get productive!');
//     }
//   };

// const App = () => {
//    const [tasks, setTasks] = useState([]); // Assuming this state is still needed
//   const [greetingMessage, setGreetingMessage] = useState('');
//   const [allTasksDone, setAllTasksDone] = useState(false);

//   useEffect(() => {
//     // Determine greeting based on time
//     const currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour >= 4 && currentHour < 12) {
//       greeting = 'Good morning!';
//     } else if (currentHour >= 12 && currentHour < 17) {
//       greeting = 'Good afternoon!';
//     } else {
//       greeting = 'Good evening!';
//     }

//     setGreetingMessage(greeting);
//   }, []);

//   // const updateGreeting = (completedTasksCount) => {
//   //   if (completedTasksCount === 0 && allTasksDone) {
//   //     setGreetingMessage('Yay! all tasks done');
//   //   } else if (completedTasksCount > 0) {
//   //     setGreetingMessage(greetingMessage + ' You\'re making great progress!');
//   //   } else {
//   //     setGreetingMessage(greetingMessage + ' Let\'s get productive!');
//   //   }
//   // };

//   const updateGreeting = (completedTasksCount) => {
//     if (completedTasksCount === 0) {
//       setGreetingMessage(greetingMessage +'Let\'s get productive!!');
//     } else if (completedTasksCount === tasks.length) {
//       setGreetingMessage(greetingMessage +'Yay! all tasks done');
//     } else if (completedTasksCount > 0) {
//       setGreetingMessage(greetingMessage + ' You\'re making great progress!');
//     }
//   };
  

//   return (
//     <div>
//       <Greeting message={greetingMessage} />
//       <TodoList onUpdateCompletedTasks={updateGreeting} onAllTasksCompleted={setAllTasksDone}/>
//     </div>
//   );
// };

// export default App;


// const App = () => {
//   const [greetingMessage, setGreetingMessage] = useState('');
//   const [dynamicMessage, setDynamicMessage] = useState('');
//   const [allTasksDone, setAllTasksDone] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   useEffect(() => {
//     // Determine greeting based on time
//     const currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour >= 4 && currentHour < 12) {
//       greeting = 'Good morning!';
//     } else
 
// if (currentHour >= 12 && currentHour < 17) {
//       greeting = 'Good afternoon!';
//     } else {
//       greeting = 'Good evening!';
//     }

//     setGreetingMessage(greeting);
//   }, []);

//   const updateGreeting = (completedTasksCount) => {
//     if(completedTasksCount === 0 || tasks.length===0){
//       setDynamicMessage('Lets get some tasks done!');
//     }
//     else if (allTasksDone) {
//       setDynamicMessage('Yay! all tasks done');
//     } else if (completedTasksCount > 2) {
//       setDynamicMessage(' You\'re making great progress!');
//     } else {
//       setDynamicMessage('');
//     }
//   };

//   return (
//     <div>
//       <Greeting message={greetingMessage + dynamicMessage} />
//       <TodoList
//       tasks = {tasks}
//         onUpdateCompletedTasks={updateGreeting}
//         onAllTasksCompleted={setAllTasksDone}
//       />
//     </div>
//   );
// };

// export default App;


const App = () => {
  const [greetingMessage, setGreetingMessage] = useState('');
  const [dynamicMessage, setDynamicMessage] = useState('');
  const [allTasksDone, setAllTasksDone] = useState(false);
  const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // Determine greeting based on time
//     const currentHour = new Date().getHours();
//     let greeting;

//     if (currentHour >= 4 && currentHour < 12) {
//       greeting = 'Good morning!';
//     } else
 
// if (currentHour >= 12 && currentHour < 17) {
//       greeting = 'Good afternoon!';
//     } else {
//       greeting = 'Good evening!';
//     }

//     setGreetingMessage(greeting);
//   }, []);

  // const updateGreeting = (completedTasksCount) => {
  //   if (completedTasksCount === 0 || tasks.length === 0) {
  //     setDynamicMessage('Let\'s get some tasks done!');
  //   } else if (completedTasksCount === tasks.length && allTasksDone) {
  //     setDynamicMessage('Yay! all tasks done');
  //     setAllTasksDone(true); 
  //   } else if (completedTasksCount >= 2 && !allTasksDone) {
  //     setDynamicMessage(' You\'re making great progress!');
  //   } else {
  //     setDynamicMessage('');
  //     setAllTasksDone(false);
  //   }
  // };

  // const updateGreeting = (completedTasksCount) => {
  //   if (completedTasksCount === 0 || tasks.length === 0) {
  //         setDynamicMessage('Let\'s get some tasks done!');
  //   }
  //   else if (completedTasksCount === tasks.length && allTasksDone) {
  //     setDynamicMessage('Yay! all tasks done');
  //     setAllTasksDone(true); // Set allTasksDone to true when all are done
  //   } else {
  //     setDynamicMessage(''); // Clear the message if not all tasks are done
  //     setAllTasksDone(false); // Reset allTasksDone to false
  //   }

  //   // Additional check for more than 2 tasks completed (if needed)
  //   if (completedTasksCount >= 2 && !allTasksDone) {
  //     setDynamicMessage('You\'re making great progress!');
  //   }
  // };

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