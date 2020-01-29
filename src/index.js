import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './StyleSheets/Notes.css';
import './StyleSheets/DirectoryComponent.css';
import './StyleSheets/Task.css';
import './StyleSheets/StatusListModal.css';
import './StyleSheets/StudentDashboard.css';
import './StyleSheets/Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';


ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
