import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const imageStyles = {
  width: '65%',
  margin: '0 auto'
};

const Destructuring = props => (
  <div style={{ height: '100%' }}>
    <Tabs>
      <Tab label="Object Destructuring">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '3200px'
          }}
        >
          <img
            src="/img/destructuringObject.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          {!props.destructSyntaxTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="destructSyntaxTwo"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.destructSyntaxTwo && (
            <img
              src="/img/destructuringES5.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.destructSyntaxTwo &&
            !props.destructSyntaxThree && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructSyntaxThree"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructSyntaxThree && (
            <img
              src="/img/destructuringES6.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.destructSyntaxThree &&
            !props.destructSyntaxFour && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructSyntaxFour"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructSyntaxFour && (
            <img
              src="/img/destructuringReassignment.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.destructSyntaxFour &&
            !props.destructSyntaxFive && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructSyntaxFive"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructSyntaxFive && (
            <img
              src="/img/destructuringOtherVarName.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.destructSyntaxFive &&
            !props.destructSyntaxSix && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructSyntaxSix"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructSyntaxSix && (
            <img
              src="/img/destructuringDefault.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {props.destructSyntaxSix &&
            !props.destructSyntaxSeven && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructSyntaxSeven"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructSyntaxSeven && (
            <img
              src="/img/destructuringNested.png"
              alt="ES5 String Concat"
              style={{
                ...imageStyles,
                marginTop: '25px',
                marginBottom: '25px'
              }}
            />
          )}
        </div>
      </Tab>
      <Tab label="Destructuring Parameters">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '2400px'
          }}
        >
          <img
            src="/img/destructuringParamFunction.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          {!props.destructParamTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="destructParamTwo"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.destructParamTwo && (
            <img
              src="/img/destructuringParamFunctionCall.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {!props.destructParamThree &&
            props.destructParamTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructParamThree"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructParamThree && (
            <img
              src="/img/destructuringParamFunctionCallObject.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {!props.destructParamFour &&
            props.destructParamThree && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructParamFour"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructParamFour && (
            <img
              src="/img/destructuringParamFunctionObject.png"
              alt="ES5 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {!props.destructParamFive &&
            props.destructParamFour && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="destructParamFive"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.destructParamFive && (
            <img
              src="/img/destructuringParamFunctionObjectDefaults.png"
              alt="ES5 String Concat"
              style={{
                ...imageStyles,
                marginTop: '25px',
                marginBottom: '25px'
              }}
            />
          )}
        </div>
      </Tab>
      <Tab label="Array Destructuring">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '2000px'
          }}
        >
          <img
            src="/img/destructuringArray.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          {!props.destructArrayTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="destructArrayTwo"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.destructArrayTwo && (
            <img
              src="/img/destructuringArrayTwo.png"
              alt="ES5 String Concat"
              style={{
                ...imageStyles,
                marginTop: '25px',
                marginBottom: '25px'
              }}
            />
          )}
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
          <Link
            to="/templateLiterals"
            style={{
              color: '#F1F7EE',
              textAlign: 'right',
              textDecoration: 'none',
              alignSelf: 'flex-end'
            }}
          >
            <h3 style={{ marginRight: '35px' }}>Next: Template Literals</h3>
          </Link>
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default Destructuring;
