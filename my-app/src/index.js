import React from 'react';
import ReactDOM from 'react-dom';
import MyWidget from './mywid/MyWidget';
import BlixtWidget from './blixt/BlixtWidget';

export default {widgets: {
   blixtWidgetLib: {
   		render: (args) => {
          	ReactDOM.render(<BlixtWidget />, document.getElementById(args));
  		}
   },
   myWidgetLib: {
   		render: (args) => {
          	ReactDOM.render(<MyWidget />, document.getElementById(args));
  		}
   }
}}
