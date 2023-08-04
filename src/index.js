 import React from 'react';
import fruit from './fruit';
import { choice } from './helper';
// import ReactDOM from 'react-dom/client';
// import './index.css';
 import App from './App';
// import reportWebVitals from './reportWebVitals';
 import fruits from './foods';

 let fruit = choice(fruits);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

 console.log ("i'd like one ${fruit}, please!");
 console.log('here you go: ${fruit}');
 console.log('Delicous! May I have another? ');

 let remaining = remove(fruit, fruits);

 console.log ('Im sorry, we are currently ou., we have ${remaining.length} left.' );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
