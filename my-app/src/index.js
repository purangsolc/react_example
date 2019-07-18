// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

export default {
	config: function(config) {
    	LibConfig = config;
  	},
	widgets: {
	   myWidget: {
	   		render: (args) => {
          ReactDOM.render(
              <App />
          );
      }
	   }
	}
}