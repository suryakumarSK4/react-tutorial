import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{Compstate} from './App';
import Bootstrap1 from './Bootstrap1';
import ArrayList from './ArrayList';
import ReuseComp from './ReuseComp';
import App2 from './App2';
import Routinglearn from './Routing';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreviousState from './PreviousState'
import StateObject from './StateObject'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Bootstrap1 />
    <ArrayList />
    <App2 />
    <Routinglearn />
    < PreviousState />
    <StateObject /> */}

  </React.StrictMode>,
  document.getElementById('root')
);


// REDUX
// import Redux1 from './Redux1';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducers from './service/reducer/index';
// const store = createStore(rootReducers);
// console.log(store);
// ReactDOM.render(
//   <Provider store={store}>
//       {/* REDUX */}
//       <Redux1 />
//   </Provider>,
//   document.getElementById('root')
// );




// **********************  APIS   ***********************
// import Post from './Api/post'
// import Get from './Api/Get'
// ReactDOM.render(
//   <React.StrictMode>
//     <Post />
//     <Get />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// import Header from '../src/Project/Header';
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
// import Login from '../src/Project/Login';
// import Register from '../src/Project/Register'
// import AddProduct from '../src/Project/AddProduct';
// import UpdateProduct from '../src/Project/UpdateProduct';
// import Protected from '../src/Project/Protected'
// // //***********    PROJECT    *************
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <Switch>
//       <Route exact path="/login" > 
//         <Login /> 
//       </Route>
//       <Route exact path="/Register" > 
//         <Register /> 
//       </Route>
//       <Route exact path="/add" > 
//         <Protected Comp={AddProduct}/>
//         <AddProduct /> 
//       </Route>
//       <Route exact path="/update" > 
//         <Protected Comp={UpdateProduct}/>
//         <UpdateProduct /> 
//       </Route>
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



