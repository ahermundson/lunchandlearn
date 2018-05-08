import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const imageStyles = {
  width: '80%',
  margin: '0 auto'
};

const TemplateLiterals = () => (
  <div style={{ height: '100%' }}>
    <Tabs>
      <Tab label="Syntax">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <h4>ES5</h4>
          <img
            src="/img/es5StringConcat.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          <h4 style={{ marginTop: '10px' }}>ES6</h4>
          <img
            src="/img/es6StringConcat.png"
            alt="ES6 String Concat"
            style={imageStyles}
          />
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default TemplateLiterals;
