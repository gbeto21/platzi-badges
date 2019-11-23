/*Utilizando java script normal.*/

// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');
// container.appendChild(element);


/*Utilizando JSX */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/badge'
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
import App from './components/App';


// const jsxName = <h1>Hola soy, {expresiones_que_se_pueden_evaluar}</h1>
const name = 'Beto'
const jsx = <h1>Saludos, Platzi Badges from React!</h1>
const jsxName = <h1>Hola soy, {name}</h1>
const elementh1 = React.createElement('h1', {}, 'Hola, children.');
const elementlink = React.createElement(
    'a',
    { href: 'https://platzi.com' },
    'Ir a platzi.');

const elementh1_1 = React.createElement(
    'h1',
    {},
    `Hola, soy ${name}`);

const jsxElement = (
    <div>
        <h1>Hola, soy Richard</h1>
        <p>Soy ingeniero front end.</p>
    </div>
);

const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Richard'),
    React.createElement('p', {}, 'Soy ingeniero de la web.')
);


const container = document.getElementById('app');

// ReactDOM.render(__qué, __dónde);
// ReactDOM.render(element, container)
// Solo se viualizará un solo Render del objeto: ReactDOM. S
// si se manda llamar dos veces al método render, se renderizará
// lo que se indicó en el segundo render.

// ReactDOM.render(<Badge 
//     firstName="Lilly" 
//     lastName="Kaufman" 
//     jobTitle="Front Enginerr" 
//     twitter="Sparragus" 
//     avatarURL = "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
//     />, container);

// ReactDOM.render(<Badges />, container);
ReactDOM.render(<App />, container);
