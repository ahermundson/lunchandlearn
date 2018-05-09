import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const imageStyles = {
  width: '85%',
  margin: '0 auto'
};

const EcmaScript = props => (
  <Tabs>
    <Tab label="ECMAScript">
      <div
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <img
          src="/img/whatIsEcmaScript.png"
          alt="arrowFunctionVariations"
          style={{ ...imageStyles }}
        />
      </div>
    </Tab>
    <Tab label="TC39">
      <div
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <img
          src="/img/tc39.png"
          alt="arrowFunctionVariations"
          style={{ ...imageStyles }}
        />
      </div>
    </Tab>
    <Tab label="History">
      <div
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '2500px'
        }}
      >
        <img
          src="/img/ecmaHistoryOne.png"
          alt="arrowFunctionVariations"
          style={{ ...imageStyles }}
        />
        {!props.ecmaHistoryTwo && (
          <Arrow
            onArrowClick={props.showNext}
            stateName="ecmaHistoryTwo"
            style={{
              color: 'white',
              marginTop: '10px',
              marginBottom: '15px'
            }}
          />
        )}
        {props.ecmaHistoryTwo && (
          <img
            src="/img/ecmaHistoryTwo.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaHistoryThree &&
          props.ecmaHistoryTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaHistoryThree"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaHistoryThree && (
          <img
            src="/img/ecmaHistoryThree.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaHistoryFour &&
          props.ecmaHistoryThree && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaHistoryFour"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaHistoryFour && (
          <img
            src="/img/ecmaHistoryFour.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaHistoryFive &&
          props.ecmaHistoryFour && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaHistoryFive"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaHistoryFive && (
          <img
            src="/img/ecmaHistoryFive.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaHistorySix &&
          props.ecmaHistoryFive && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaHistorySix"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaHistorySix && (
          <img
            src="/img/ecmaHistorySix.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
      </div>
    </Tab>
    <Tab label="Process">
      <div
        style={{
          marginTop: '25px',
          marginBottom: '25px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '2500px'
        }}
      >
        <img
          src="/img/strawman.png"
          alt="arrowFunctionVariations"
          style={{ ...imageStyles }}
        />
        {!props.ecmaTwo && (
          <Arrow
            onArrowClick={props.showNext}
            stateName="ecmaTwo"
            style={{
              color: 'white',
              marginTop: '10px',
              marginBottom: '15px'
            }}
          />
        )}
        {props.ecmaTwo && (
          <img
            src="/img/proposal.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaThree &&
          props.ecmaTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaThree"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaThree && (
          <img
            src="/img/draft.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaFour &&
          props.ecmaThree && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaFour"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaFour && (
          <img
            src="/img/candidate.png"
            alt="arrowFunctionVariations"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
        )}
        {!props.ecmaFive &&
          props.ecmaFour && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="ecmaFive"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
        {props.ecmaFive && (
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src="/img/finished.png"
              alt="arrowFunctionVariations"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
            <Link
              to="/letvsvar"
              style={{
                color: '#F1F7EE',
                textAlign: 'right',
                textDecoration: 'none',
                alignSelf: 'flex-end'
              }}
            >
              <h3 style={{ marginRight: '25px' }}>Next: Let vs Var</h3>
            </Link>
          </div>
        )}
      </div>
    </Tab>
  </Tabs>
);

export default EcmaScript;
