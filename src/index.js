// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges!'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello, Platzy Badges from React!</h1>;
const container = document.getElementById("app");

//ReactDOM el qué y en dónde.
//Es necesario importar Reac en dónde se utilize JSX
ReactDOM.render(element, container);
