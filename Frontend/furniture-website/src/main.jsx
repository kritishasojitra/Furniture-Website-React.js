import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import { Store } from './Store/Store.js'; 
import { BrowserRouter } from 'react-router-dom';
// Make sure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);
