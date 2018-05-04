import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <ul style={{ listStyleType: 'none' }}>
      <h3>ES6 Additions We Will Cover</h3>
      <li>Let and const</li>
      <li>Arrow functions</li>
      <li>Spread operator</li>
      <li>Object destructuring</li>
      <li>ES6 Modules</li>
    </ul>
    <div
      style={{
        marginRight: '35px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Link to="/letvsvar">
        <h4 style={{ color: '#F1F7EE' }}>Start</h4>
      </Link>
    </div>
  </div>
);

export default Landing;
