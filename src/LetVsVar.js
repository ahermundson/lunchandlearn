/* eslint no-unused-vars: 0 */
/* eslint no-use-before-define: 0 */
/* eslint no-loop-func: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import Arrow from './Arrow';

const imageStyles = {
  width: '95%',
  margin: '0 auto'
};

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

const LetVsVar = props => {
  return (
    <div style={{ height: '100%' }}>
      <Tabs>
        <Tab label="Let vs Var">
          <div style={{ height: '100vh' }}>
            <h1 style={{ textAlign: 'center' }}>Let vs Var</h1>
            <div style={{ margin: '0 auto' }}>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  Bindings using var are Function scoped whereas bindings using
                  let are block scoped
                </li>
                <li>var is hoisted</li>
                <li>Loop bindings</li>
                <li>What about const?</li>
              </ul>
            </div>
          </div>
        </Tab>
        <Tab label="Hoisting">
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '1500px'
            }}
          >
            <h2>Let vs Var / Hoisting and Scoping</h2>
            <img
              src="/img/hoisting.png"
              alt="Hoisting and Scoping"
              style={imageStyles}
            />
            {!props.hoistingTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="hoistingTwo"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
            {props.hoistingTwo && (
              <img
                src="/img/hoistingWithVisual.png"
                alt="Hoisting"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
            )}
            {props.hoistingTwo &&
              !props.hoistingThree && (
                <Arrow
                  onArrowClick={props.showNext}
                  stateName="hoistingThree"
                  style={{ color: 'white', marginTop: '10px' }}
                />
              )}
            {props.hoistingThree && (
              <img
                src="/img/hoistingWithLet.png"
                alt="Hoisting"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
            )}
            {props.hoistingThree &&
              !props.hoistingFour && (
                <Arrow
                  onArrowClick={props.showNext}
                  stateName="hoistingFour"
                  style={{ color: 'white', marginTop: '10px' }}
                />
              )}
            {props.hoistingFour && (
              <img
                src="/img/letBlockScope.png"
                alt="Hoisting"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
            )}
          </div>
        </Tab>
        <Tab label="let Within Loops">
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100vh'
            }}
          >
            <h2>Let vs Var / Let Within Loops</h2>
            <img
              src="/img/varForLoopScope.png"
              alt="ForLoopScoping"
              style={imageStyles}
            />
            <FlatButton
              backgroundColor="#fff"
              onClick={forVarLoopScope}
              label="Run Code"
              style={{ marginTop: '25px' }}
            />

            <img
              style={{ ...imageStyles, marginTop: '25px' }}
              src="/img/letForLoopScope.png"
              alt="ForLoopScoping"
            />
            <FlatButton
              backgroundColor="#fff"
              onClick={forLetLoopScope}
              label="Run Code"
              style={{ marginTop: '25px' }}
            />
          </div>
        </Tab>
        <Tab label="const">
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '25px',
              height: '100vh'
            }}
          >
            <h2>Let vs Var / const</h2>
            <img
              src="/img/const.png"
              alt="ForLoopScoping"
              style={imageStyles}
            />
            {!props.constTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="constTwo"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
            {props.constTwo && (
              <div style={{ textAlign: 'center', margin: '0 auto' }}>
                <h3 style={{ marginTop: '25px' }}>
                  Cannot Reassign !== Immutable
                </h3>
                <img
                  style={{ ...imageStyles, marginTop: '15px' }}
                  src="/img/mutable.png"
                  alt="Mutable"
                />
              </div>
            )}
          </div>
        </Tab>
        <Tab label="Redeclaration">
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100vh'
            }}
          >
            <h1>Redeclaration</h1>
            <img
              src="/img/redeclarationError.png"
              alt="redeclarationError"
              style={imageStyles}
            />
            {!props.redeclarationTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="redeclarationTwo"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
            {props.redeclarationTwo && (
              <img
                style={{ ...imageStyles, marginTop: '25px' }}
                src="/img/redeclarationNoError.png"
                alt="redeclarationNoError"
              />
            )}
          </div>
          <Link
            to="/arrowFunctions"
            style={{ color: '#F1F7EE', textAlign: 'right' }}
          >
            <h4 style={{ marginRight: '15px' }}>Next: Arrow Functions</h4>
          </Link>
        </Tab>
      </Tabs>
    </div>
  );
};

export default LetVsVar;
