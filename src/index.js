import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './StyleSheets/Notes.css';
import './StyleSheets/DirectoryComponent.css';
import './StyleSheets/Task.css';
import './StyleSheets/StatusListModal.css';
import './StyleSheets/StudentDashboard.css';
import './StyleSheets/Modal.css';
import './StyleSheets/Register.css';
import './StyleSheets/login.css';
import "./StyleSheets/LandingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configureStore from "./store";
import Main from './components/Main';

const newstore = configureStore()
 

ReactDOM.render(<Provider store={newstore}><Main /></Provider>, document.getElementById('root'));




ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
