// import React from 'react';

// const Greeting = ({ completedTasks }) => {
//   const getTimeOfDay = () => {
//     const currentHour = new Date().getHours();
//     if (currentHour < 12) {
//       return 'morning';
//     } else if (currentHour < 18) {
//       return 'afternoon';
//     } else {
//       return 'evening';
//     }
//   };

//   const getGreetingMessage = () => {
//     if (completedTasks === 0) {
//       return 'You have no tasks completed. Stay productive!';
//     } else if (completedTasks <= 5) {
//       return 'Good job! Keep going!';
//     } else {
//       return 'Great work! Take a well-deserved break!';
//     }
//   };

//   return (
//     <div>
//       <h2>{`Good ${getTimeOfDay()}, User!`}</h2>
//       <p>{getGreetingMessage()}</p>
//     </div>
//   );
// };

// export default Greeting;

import React from 'react';

function Greeting({ message }) {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold  mb-2 p-5">Enhanced Todo List</h1>
      <h1 className="text-lg mb-2">{message}</h1>
      {/* Add additional greeting elements as needed, using Tailwind classes */}
    </div>
  );
}

export default Greeting;

