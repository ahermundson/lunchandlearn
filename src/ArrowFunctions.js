/* eslint no-unused-vars: 0 */
import React from 'react';
import { Link } from 'react-router-dom';

function ArrowFunctionPerson() {
  this.age = 5;

  setTimeout(() => {
    console.log('Arrow Function: ', this.age);
  }, 0);
}

function Person() {
  this.age = 5;

  setTimeout(function() {
    console.log('ES5 Function: ', this.age);
  }, 0);
}

function es5FuncThis() {
  const person = new Person();
}

function arrowFuncThis() {
  const person = new ArrowFunctionPerson();
}

const ArrowFunctions = () => (
  <div>
    <h1>Arrow Functions</h1>
    <div
      style={{
        marginTop: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h4>ES5 Function Syntax</h4>
        <img src="/img/es5FunctionDeclaration.png" alt="ES5FuncDeclarations" />

        <h4 style={{ marginTop: '25px' }}>Arrow Function Sytax</h4>
        <img
          src="/img/arrowFunctionDeclaration.png"
          alt="ES5FuncDeclarations"
        />

        <h4 style={{ marginTop: '25px' }}>Array Methods</h4>
        <img src="/img/arrowFunctionArrays.png" alt="arrowFunctionArrays" />
      </div>

      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h4>Variations</h4>
        <img
          src="/img/arrowFunctionVariations.png"
          alt="arrowFunctionVariations"
        />
      </div>
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
        <button onClick={es5FuncThis} style={{ marginTop: '25px' }}>
          Run Code
        </button>

        <img
          src="/img/arrowFunctionThis.png"
          alt="arrowFunctionThis"
          style={{ marginTop: '25px' }}
        />
        <button onClick={arrowFuncThis} style={{ marginTop: '25px' }}>
          Run Code
        </button>
      </div>
    </div>
    <Link to="/arrowFunctions" style={{ color: '#F1F7EE', textAlign: 'right' }}>
      <h4 style={{ marginRight: '15px' }}>Next: Template Literals</h4>
    </Link>
  </div>
);

export default ArrowFunctions;
