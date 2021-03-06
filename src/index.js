import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './StyleSheets/WishlistActiveClosed.css';
import './StyleSheets/Notes.css';
import './StyleSheets/DirectoryComponent.css';
import './StyleSheets/Task.css';
import './StyleSheets/StatusListModal.css';
import './StyleSheets/StudentDashboard.css';
import './StyleSheets/Modal.css';
import './StyleSheets/Register.css';
import './StyleSheets/login.css';
import "./StyleSheets/LandingPage.css";
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';



ReactDOM.render(<Provider store={configureStore()}><Main /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
