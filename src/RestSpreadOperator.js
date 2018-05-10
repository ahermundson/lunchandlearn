import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const imageStyles = {
  width: '80%',
  margin: '0 auto'
};

const restFunctionResult = (a, b) => {
  return a + b;
};

function restArgumentsResult(a) {
  console.log(arguments);
}

const onRestFunctionOneClick = () => {
  console.log(restFunctionResult(1));
};

function onRestArgumentsClick() {
  restArgumentsResult(1);
}

function onArgumentsReduceClick() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  arguments.reduce(reducer);
}

const onRestReduceClick = () => {
  restReduce(1, 2, 3);
};

function restReduce(...args) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(args.reduce(reducer));
}

const RestSpreadOperator = props => (
  <div style={{ height: '100%' }}>
    <Tabs>
      <Tab label="Syntax">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '2000px'
          }}
        >
          <h3>Spread Operator</h3>
          <img
            src="/img/spreadSyntax.png"
            alt="Spread Operator Syntax"
            style={imageStyles}
          />
          <h3 style={{ marginTop: '25px' }}>Rest Operator</h3>
          <img
            src="/img/restSyntax.png"
            alt="Spread Operator Syntax"
            style={imageStyles}
          />
        </div>
      </Tab>
      <Tab label="Spread Operator">
        <div
          style={{
            marginTop: '25px',
            marginBottom: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '1900px'
          }}
        >
          <img
            src="/img/spreadOperatorBasicExample.png"
            alt="Rest Function One"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          {!props.spreadOperatorTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="spreadOperatorTwo"
              style={{ color: 'white', marginTop: '10px' }}
            />
          )}
          {props.spreadOperatorTwo && (
            <img
              src="/img/spreadOperatorMiddleInsert.png"
              alt="Rest Function One"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.spreadOperatorTwo &&
            !props.spreadOperatorThree && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="spreadOperatorThree"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.spreadOperatorThree && (
            <img
              src="/img/spreadOperatorString.png"
              alt="Rest Function One"
              style={{
                ...imageStyles,
                marginTop: '25px',
                marginBottom: '25px'
              }}
            />
          )}
          {props.spreadOperatorThree &&
            !props.spreadOperatorFour && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="spreadOperatorFour"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.spreadOperatorFour && (
            <img
              src="/img/spreadOperatorMath.png"
              alt="Rest Function One"
              style={{
                ...imageStyles,
                marginTop: '25px',
                marginBottom: '25px'
              }}
            />
          )}
        </div>
      </Tab>
      <Tab label="Rest Operator">
        <div
          style={{
            marginTop: '25px',
            marginBottom: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '3500px'
          }}
        >
          <img
            src="/img/restFunctionOne.png"
            alt="Rest Function One"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
          <FlatButton
            backgroundColor="#fff"
            onClick={onRestFunctionOneClick}
            label="Run Code"
            style={{ marginTop: '25px' }}
          />
          {!props.restOperatorTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="restOperatorTwo"
              style={{ color: 'white', marginTop: '10px' }}
            />
          )}
          {props.restOperatorTwo && (
            <img
              src="/img/restFunctionResolved.png"
              alt="arrowFunctionThis"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {!props.restOperatorThree &&
            props.restOperatorTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="restOperatorThree"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.restOperatorThree && (
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img
                src="/img/restArguments.png"
                alt="Rest Function One"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onRestArgumentsClick}
                label="Run Code"
                style={{ marginTop: '25px', alignSelf: 'center' }}
              />
            </div>
          )}
          {props.restOperatorThree &&
            !props.restOperatorFour && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="restOperatorFour"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.restOperatorFour && (
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img
                src="/img/argumentsReducer.png"
                alt="Rest Function One"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onArgumentsReduceClick}
                label="Run Code"
                style={{ marginTop: '25px', alignSelf: 'center' }}
              />
            </div>
          )}
          {props.restOperatorFour &&
            !props.restOperatorFive && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="restOperatorFive"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.restOperatorFive && (
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '25px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img
                src="/img/restSyntax.png"
                alt="Spread Operator Syntax"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <img
                src="/img/reducerWithRest.png"
                alt="Rest Function One"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onRestReduceClick}
                label="Run Code"
                style={{ marginTop: '25px', alignSelf: 'center' }}
              />
            </div>
          )}
          {props.restOperatorFive &&
            !props.restOperatorSix && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="restOperatorSix"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.restOperatorSix && (
            <img
              src="/img/restParamFirstRest.png"
              alt="Rest Function One"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.restOperatorSix &&
            !props.restOperatorSeven && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="restOperatorSeven"
                style={{ color: 'white', marginTop: '10px' }}
              />
            )}
          {props.restOperatorSeven && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              <img
                src="/img/restErrorFunction.png"
                alt="Rest Function One"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <Link
                to="/destructuring"
                style={{
                  color: '#F1F7EE',
                  textAlign: 'right',
                  textDecoration: 'none',
                  alignSelf: 'flex-end'
                }}
              >
                <h3 style={{ marginRight: '35px' }}>Next: Destructuring</h3>
              </Link>
            </div>
          )}
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default RestSpreadOperator;
