// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges!'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a platzi"
);

const name = "Ricardoman";
const element2 = React.createElement("h1", {}, `Hola soy ${name}`);
const sum = () => 3 + 3;
const element3 = <h1>Hola soy, {undefined}</h1>;
const element4 = (
  <div>
    <h1>Hola, Soy Richard</h1>
    <p>Soy software developer. </p>
  </div>
);
const container = document.getElementById("app");

//ReactDOM el qué y en dónde.
//Es necesario importar Reac en dónde se utilize JSX
ReactDOM.render(element4, container);
