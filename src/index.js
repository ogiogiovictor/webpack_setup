import _ from 'lodash';
import './style.css';
//import Icon from './logo1.webp';
import printMe from './print.js';

function component() {

    const element = document.createElement('div');
    const btn = document.createElement('button');
 
   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    //element.appendChild(myIcon);

 
    return element;
  }
 
  document.body.appendChild(component());