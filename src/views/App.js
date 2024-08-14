import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListTodos from './Todos/listTodos.js';

import Nav from "./NAV/nav.js"
import Home from './Example/home.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          {/* <MyComponent /> */}
          {/* <ListTodos /> */}

          <Switch>
            <Route path='/' exact><Home /></Route>

            <Route path='/todos'><ListTodos /></Route>

            <Route path='/about'><MyComponent /></Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"

        />
      </div>
    </BrowserRouter>
  );
}

export default App;
