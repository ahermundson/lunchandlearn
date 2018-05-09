/* eslint no-unused-vars: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import Arrow from './Arrow';

const imageStyles = {
  width: '85%',
  margin: '0 auto'
};

function Person() {
  this.age = 33;
  this.name = 'Alex Hermundson';
  this.showGreeting = false;
  this.greeting = `Hi my name is ${this.name} and I am ${this.age} years old.`;
  this.showGreetingClick = () => {
    console.log(this);
    setTimeout(() => {
      this.hideGreeting();
    }, 2000);
  };
  this.hideGreeting = () => {
    console.log('Hide the greeting');
  };
}

function Es5Person() {
  this.age = 33;
  this.name = 'Alex Hermundson';
  this.showGreeting = false;
  this.greeting = `Hi my name is ${this.name} and I am ${this.age} years old.`;
  this.showGreetingClick = function() {
    setTimeout(function() {
      this.hideGreeting(); // => TypeError: this.hideGreeting is not a function
    }, 2000);
  };
  this.hideGreeting = function() {
    console.log('hide the greeting');
  };
}

const es5Person = new Es5Person();

const es6Person = new Person();

const ArrowFunctions = props => (
  <div style={{ height: '100%' }}>
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
          <img
            src="/img/es5FunctionDeclaration.png"
            alt="ES5FuncDeclarations"
            style={imageStyles}
          />
          {!props.arrowSyntaxTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="arrowSyntaxTwo"
              style={{ color: 'white', marginTop: '10px' }}
            />
          )}
          {props.arrowSyntaxTwo && (
            <div style={{ textAlign: 'center', margin: '0 auto' }}>
              <h4 style={{ marginTop: '25px' }}>Arrow Function Sytax</h4>
              <img
                src="/img/arrowFunctionDeclaration.png"
                alt="ES5FuncDeclarations"
                style={imageStyles}
              />
            </div>
          )}
        </div>
      </Tab>
      <Tab label="Arrow Function w/ Array Methods">
        <div
          style={{
            marginTop: '10px',
            marginBottom: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/arrowFunctionArrays.png"
            alt="arrowFunctionArrays"
            style={{ ...imageStyles, width: '85%' }}
          />
        </div>
      </Tab>
      <Tab label="Variations">
        <div
          style={{
            marginTop: '25px',
            marginBottom: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/arrowFunctionVariations.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, width: '75%' }}
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
          <img
            src="/img/es5FunctionThis.png"
            alt="es5FunctionThis"
            style={{ ...imageStyles, width: '70%' }}
          />
          <FlatButton
            backgroundColor="#fff"
            onClick={es5Person.showGreetingClick}
            label="Show Greeting"
            style={{ marginTop: '25px' }}
          />
          <img
            src="/img/arrowFunctionThis.png"
            alt="arrowFunctionThis"
            style={{ ...imageStyles, width: '70%', marginTop: '25px' }}
          />
          <FlatButton
            backgroundColor="#fff"
            onClick={es6Person.showGreetingClick}
            label="Show Greeting"
            style={{ marginTop: '25px' }}
          />
          <Link
            to="/restSpreadOperator"
            style={{
              color: '#F1F7EE',
              marginLeft: 'auto',
              textDecoration: 'none'
            }}
          >
            <h3 style={{ marginRight: '15px' }}>
              Next: Rest / Spread Operator
            </h3>
          </Link>
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default ArrowFunctions;
