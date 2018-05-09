import React from 'react';
import { Link } from 'react-router-dom';

const imageStyles = {
  width: '65%',
  margin: '0 auto'
};

const Landing = () => (
  <div style={{ height: '100vh' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center' }}>ES6 Additions We Will Cover</h2>
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
        justifyContent: 'flex-end'
      }}
    >
      <Link to="/letvsvar">
        <h4 style={{ color: '#F1F7EE' }}>Next: Let vs Var</h4>
      </Link>
    </div>
  </div>
);

export default Landing;
