/* eslint no-unused-vars: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

function ArrowFunctionPerson() {
  this.age = 33;
  this.name = 'Alex Hermundson';
  this.showGreeting = false;
  this.greeting = `Hi my name is ${this.name} and I am ${this.age} years old.`;
  this.showGreetingClick = () => {
    console.log(this.greeting);
    setTimeout(() => {
      this.hideGreeting(); 
    }, 2000);
  };
  this.hideGreeting = () => {
    console.log('Hide the greeting');
  }
}

function Person() {
  this.age = 33;
  this.name = 'Alex Hermundson';
  this.showGreeting = false;
  this.greeting = `Hi my name is ${this.name} and I am ${this.age} years old.`;
  this.showGreetingClick = function () {
    console.log(this);
    setTimeout(function () {
      this.hideGreeting(); // => TypeError: this.hideGreeting is not a function
    }, 2000);
  };
  this.hideGreeting = function () {
    console.log('hide the greeting');
  }
}

const es5Person = new Person();

const es6Person = new ArrowFunctionPerson();

const ArrowFunctions = () => (
  <div style={{height: '100%'}}>
    <Tabs>
      <Tab label="Syntax">
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <h4>ES5 Function Syntax</h4>
          <img src="/img/es5FunctionDeclaration.png" alt="ES5FuncDeclarations" />

          <h4 style={{ marginTop: '25px' }}>Arrow Function Sytax</h4>
          <img
            src="/img/arrowFunctionDeclaration.png"
            alt="ES5FuncDeclarations"
          />
        </div>
      </Tab>
      <Tab label="Arrow Function w/ Array Methods">
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <h4 style={{ marginTop: '25px' }}>Arrow Function w/ Array Methods</h4>
          <img src="/img/arrowFunctionArrays.png" alt="arrowFunctionArrays" />
        </div>
      </Tab>
      <Tab label="Variations">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <h4>Variations</h4>
          <img
            src="/img/arrowFunctionVariations.png"
            alt="arrowFunctionVariations"
          />
        </div>
      </Tab>
      <Tab label="This">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h4>Arrow Functions & This</h4>
          <img src="/img/es5FunctionThis.png" alt="es5FunctionThis" />
          <FlatButton backgroundColor="#fff" onClick={es5Person.showGreetingClick} label="Show Greeting" style={{ marginTop: '25px' }} />
          <img
            src="/img/arrowFunctionThis.png"
            alt="arrowFunctionThis"
            style={{ marginTop: '25px' }}
          />
          <FlatButton backgroundColor="#fff" onClick={es6Person.showGreetingClick} label="Show Greeting" style={{ marginTop: '25px' }} />
          <Link to="/arrowFunctions" style={{ color: '#F1F7EE', marginLeft: 'auto' }}>
            <h4 style={{ marginRight: '15px' }}>Next: Template Literals</h4>
          </Link>
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default ArrowFunctions;
