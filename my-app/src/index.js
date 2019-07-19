import React from 'react';
import ReactDOM from 'react-dom';
import BlixtWidget from './blixt/BlixtWidget';
import ClockWidget from './clock/ClockWidget';

export default {widgets: {
   blixtWidget: {
   		render: (args) => {
          	ReactDOM.render(<BlixtWidget />, document.getElementById(args));
  		}
   },
   clockWidget: {
   		render: (args) => {
          	ReactDOM.render(<ClockWidget />, document.getElementById(args));
  		}
   }
}}
