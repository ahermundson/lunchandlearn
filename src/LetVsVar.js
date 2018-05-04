/* eslint no-unused-vars: 0 */
/* eslint no-use-before-define: 0 */
/* eslint no-loop-func: 0 */

import React from 'react';
import { Link } from 'react-router-dom';

const forVarLoopScope = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
  }
};

const forLetLoopScope = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
  }
};

const LetVsVar = () => (
  <div>
    <h1>Let vs Var</h1>
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
          marginTop: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2>Hoisting</h2>
        <img src="/img/hoisting.png" alt="Hoisting" />
        <img
          src="/img/hoistingError.png"
          alt="Hoisting"
          style={{ marginTop: '25px' }}
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
        <h2>Function Scoped vs Block Scoped</h2>
        <img src="/img/varForLoopScope.png" alt="ForLoopScoping" />
        <button onClick={forVarLoopScope} style={{ marginTop: '25px' }}>
          Run Code
        </button>

        <img
          style={{ marginTop: '25px' }}
          src="/img/letForLoopScope.png"
          alt="ForLoopScoping"
        />
        <button onClick={forLetLoopScope} style={{ marginTop: '25px' }}>
          Run Code
        </button>
      </div>
      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h2>const vs let</h2>
        <img src="/img/const.png" alt="ForLoopScoping" />
        <img
          style={{ marginTop: '25px' }}
          src="/img/constError.png"
          alt="ForLoopScoping"
        />
      </div>
    </div>
    <Link to="/arrowFunctions" style={{ color: '#F1F7EE', textAlign: 'right' }}>
      <h4 style={{ marginRight: '15px' }}>Next: Arrow Functions</h4>
    </Link>
  </div>
);

export default LetVsVar;
