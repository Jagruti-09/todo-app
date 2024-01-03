import React, { useState,useEffect } from 'react';
import TodoItem from './TodoItem';

//const TodoList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([
//         ...tasks,
//         { id: Date.now(), text: newTask, completed: false },
//       ]);
//       setNewTask('');
//     }
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const toggleCompletion = (taskId) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };
// const TodoList = ({ onUpdateCompletedTasks, onAllTasksCompleted }) => {
// const [tasks, setTasks] = useState([]);
// const [newTask, setNewTask] = useState('');
// const [completedTasksCount, setCompletedTasksCount] = useState(0);

// const addTask = () => {
//   if (newTask.trim() !== '') {
//     setTasks([
//       ...tasks,
//       { id: Date.now(), text: newTask, completed: false },
//     ]);
//     setNewTask('');
//   }
// };

// const deleteTask = (taskId) => {
//   setTasks(tasks.filter((task) => task.id !== taskId));
//   updateCompletedTasksCount();
// };

// const toggleCompletion = (taskId) => {
//   setTasks(
//     tasks.map((task) =>
//       task.id === taskId
//         ? { ...task, completed: !task.completed }
//         : task
//     )
//   );
//   updateCompletedTasksCount();
// };

// // const updateCompletedTasksCount = () => {
// //   setCompletedTasksCount(tasks.filter((task) => task.completed).length);
// //   onUpdateCompletedTasks(completedTasksCount);

// //   if (completedTasksCount === 0 && tasks.length === 0) {
// //     onAllTasksCompleted();
// //   }
// // };


// const updateCompletedTasksCount = () => {
//     const completedTasksCount = tasks.filter((task) => task.completed).length;
//     onUpdateCompletedTasks(completedTasksCount);
  
//     if (completedTasksCount === tasks.length) {
//       onAllTasksCompleted();
//     }
//   };
  
// useEffect(() => {
//   updateCompletedTasksCount();
// }, [tasks]);
// const TodoList = ({ onUpdateCompletedTasks, onAllTasksCompleted }) => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState('');
//     const [completedTasksCount, setCompletedTasksCount] = useState(0);
  
//     const addTask = () => {
//       if (newTask.trim() !== '') {
//         setTasks([
//           ...tasks,
//           { id: Date.now(), text: newTask, completed: false },
//         ]);
//         setNewTask('');
//       }
//     };
  
//     const deleteTask = (taskId) => {
//       setTasks(tasks.filter((task) => task.id !== taskId));
//       updateCompletedTasksCount();
//     };
  
//     const toggleCompletion = (taskId) => {
//       setTasks(
//         tasks.map((task) =>
//           task.id === taskId
//             ? { ...task, completed: !task.completed }
//             : task
//         )
//       );
//       updateCompletedTasksCount();
//     };
  
//     const updateCompletedTasksCount = () => {
//       setCompletedTasksCount(tasks.filter((task) => task.completed).length);
//       onUpdateCompletedTasks(completedTasksCount);
  
//       if (completedTasksCount === tasks.length) {
//         onAllTasksCompleted();
//       }
//     };
  
//     useEffect(() => {
//       updateCompletedTasksCount();
//     }, [tasks]);

const TodoList = ({ tasks,setTasks, onUpdateCompletedTasks, onAllTasksCompleted }) => {
    const [newTask, setNewTask] = useState('');
    const [completedTasksCount, setCompletedTasksCount] = useState(0);
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([
          ...tasks,
          { id: Date.now(), text: newTask, completed: false },
        ]);
        setNewTask('');
      }
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
      updateCompletedTasksCount();
    };
  
    const toggleCompletion = (taskId) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
        )
      );
      updateCompletedTasksCount();
    };
  
    const updateCompletedTasksCount = () => {
      setCompletedTasksCount(tasks.filter((task) => task.completed).length);
      onUpdateCompletedTasks(completedTasksCount);
  
      if (completedTasksCount === tasks.length) {
        onAllTasksCompleted(true); // Pass true to indicate all tasks are done
      } else {
        onAllTasksCompleted(false); // Reset if not all tasks are done
      }
    };

      

   
      
  
    useEffect(() => {
      updateCompletedTasksCount();
    }, [tasks]);
  return (
    <div className="text-center mt-4">
      
      <div>
        <input
          className='shadow appearance-none  rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text"
          value={newTask}
          placeholder='Add new task'
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br />
        <button className='bg-deepblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
        onClick={addTask}>
            Add Task
        </button>
      </div>
      {/* Display tasks */}
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={() => deleteTask(task.id)}
          onToggleCompletion={() => toggleCompletion(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
