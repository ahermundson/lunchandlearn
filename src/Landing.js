import React from 'react';
import { Link } from 'react-router-dom';

const imageStyles = {
  width: '65%',
  margin: '0 auto'
};

const Landing = () => (
  <div style={{ height: '100vh' }}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2 style={{ textAlign: 'center' }}>What We Will Cover</h2>
      <img
        src="/img/whatWellCover.png"
        alt="Rest Function One"
        style={{ ...imageStyles, marginTop: '25px' }}
      />
    </div>
    <div
      style={{
        marginRight: '35px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }}
    >
      <Link style={{ textDecoration: 'none' }} to="/ecmascript">
        <h4 style={{ color: '#F1F7EE' }}>Next: ECMAScript and Process</h4>
      </Link>
    </div>
  </div>
);

export default Landing;
