import React from 'react';

const TodoItem = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <div className="mx-auto my-4 max-w-md text-left mt-4 shadow appearance-none  rounded leading-tight flex items-center justify-between p-4">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
       
        {task.text}
        
      </span>
      <button className='text-deepblue'
      onClick={onToggleCompletion}>
        {task.completed ? 'Completed' : 'Complete'}
      </button>
      {/* <button onClick={onDelete}>Delete</button> */}
    </div>
  );
};

export default TodoItem;
