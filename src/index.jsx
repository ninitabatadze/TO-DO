import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 

class MyApp extends React.Component {
  render() {
    return (
      <React.Fragment>
      <App />
      </React.Fragment>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<MyApp />); 
