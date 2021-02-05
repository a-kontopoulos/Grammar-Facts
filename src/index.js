import { grammar } from './grammar';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const title = ""

const facts = []

for(const type in grammar) {
  facts.push(<div
    key = {type}
    className = 'grammar'
    alt = {type}
    ariaLabel = {type}
    role = "button"
    onClick = {displayFact}>
    {type}
    </div>

   )
}

function displayFact(e) {
  const selectedType = e.target.alt;
  const grammarInfo = grammar[selectedType];
  const optionIndex = Math.floor(Math.random() * grammarInfo.facts.length);
  const funFact = grammarInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const background = (<img
  className = "background"
  alt = "ocean"
  src = "/images/ocean.jpg"
  />
)

const grammarFacts = (
  <div>
    <h1>{title === "" ? "Click a grammar type for a fact" : title }  </h1>
    <p id = "fact"></p>
    <div className = "">
      {facts}
    </div>
  </div>
)

const App = () => (
  grammarFacts
)

ReactDOM.render(

    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
