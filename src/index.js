import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//import Test from './mycode/mycomp';
// import ArrayOps from './class3/arrayops'
// import ArrayOp from './class5/arraysop';
// import Todo from './class6/todo';
// import Color from './texts/color';
// import Background from './class7/background';
// import Fetch from './class7/fetch';
// import GetFetch from './tasks/fetching';
// import PostFetch from './class7/postfect';
// import Login from './tasks/login';
// import LoginPass from './tasks/loginactivity';
// import MyFile from './tasks/loginact';
// import DelayData from './tasks/delaydata';
// import Color from './tasks/colorchange'
import Demo from './class8/Demo';
ReactDOM.render(
  <React.StrictMode>
    {/* <Background /> */}
    {/* <GetFetch /> */}
    {/* <PostFetch /> */}
    {/* <LoginPass /> */}
    {/* <Color/> */}
    <Demo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
