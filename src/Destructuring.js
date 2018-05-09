import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const imageStyles = {
  width: '65%',
  margin: '0 auto'
};

const Destructuring = () => (
  <div style={{ height: '100%' }}>
    <Tabs>
      <Tab label="Object Destructuring">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/destructuringObject.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          <img
            src="/img/destructuringES5.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringES6.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringReassignment.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringOtherVarName.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringDefault.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringNested.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px', marginBottom: '25px' }}
          />
        </div>
      </Tab>
      <Tab label="Destructuring Parameters">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/destructuringParamFunction.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          <img
            src="/img/destructuringParamFunctionCall.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringParamFunctionCallObject.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringParamFunctionObject.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <img
            src="/img/destructuringParamFunctionObjectDefaults.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px', marginBottom: '25px' }}
          />
        </div>
      </Tab>
      <Tab label="Array Destructuring">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/destructuringArray.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          <img
            src="/img/destructuringArrayTwo.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px', marginBottom: '25px' }}
          />
        </div>
      </Tab>
      <Tab label="Mixed Destructuring">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <img
            src="/img/destructuringMixedObject.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          <img
            src="/img/destructuringMixed.png"
            alt="ES5 String Concat"
            style={{ ...imageStyles, marginTop: '25px', marginBottom: '25px' }}
          />
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default Destructuring;
