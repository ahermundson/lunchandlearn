import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import FlatButton from 'material-ui/FlatButton';

const imageStyles = {
  width: '80%',
  margin: '0 auto'
};

const onHtmlClick = () => {
  console.log(`
    <div>
        <h1>Alex</h1>
    </div>
`);
};

const onTemplateTagFuncionClick = () => {
  function templateTag(strings, ...values) {
    console.log(strings);
    console.log(values);
  }
  const person = 'Alex';
  templateTag`
    <div>
        <h1>${person}</h1>
    </div>
`;
};

const onFunctionInTemplateTagClick = () => {
  function templateTagFunction(strings, ...values) {
    values.forEach(value => {
      if (typeof value === 'function') {
        value();
      }
    });
  }

  templateTagFunction`Execute this function ${() =>
    console.log('Function was executed')}`;
};

const TemplateLiterals = props => (
  <div style={{ height: '100%' }}>
    <Tabs>
      <Tab label="Syntax">
        <div
          style={{
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '1000px'
          }}
        >
          <h3>ES5</h3>
          <img
            src="/img/es5StringConcat.png"
            alt="ES5 String Concat"
            style={imageStyles}
          />
          {!props.templateLiteralTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="templateLiteralTwo"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.templateLiteralTwo && (
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h3 style={{ marginTop: '10px' }}>ES6</h3>
              <img
                src="/img/es6StringConcat.png"
                alt="ES6 String Concat"
                style={imageStyles}
              />
            </div>
          )}
        </div>
      </Tab>
      <Tab label="Usage">
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
            src="/img/templateLiteralFunction.png"
            alt="ES6 String Concat"
            style={imageStyles}
          />
          {!props.templateLiteralThree && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="templateLiteralThree"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.templateLiteralThree && (
            <img
              src="/img/templateLiteralMultiLine.png"
              alt="ES6 String Concat"
              style={{ ...imageStyles, marginTop: '25px' }}
            />
          )}
          {!props.templateLiteralFour &&
            props.templateLiteralThree && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="templateLiteralFour"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.templateLiteralFour && (
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
                src="/img/templateLiteralHtml.png"
                alt="ES6 String Concat"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onHtmlClick}
                label="Run Code"
                style={{ marginTop: '25px', marginBottom: '25px' }}
              />
            </div>
          )}
        </div>
      </Tab>
      <Tab label="Template Tag">
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
            src="/img/templateTagExample.png"
            alt="ES6 String Concat"
            style={imageStyles}
          />
          {!props.templateTagTwo && (
            <Arrow
              onArrowClick={props.showNext}
              stateName="templateTagTwo"
              style={{
                color: 'white',
                marginTop: '10px',
                marginBottom: '15px'
              }}
            />
          )}
          {props.templateTagTwo && (
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
                src="/img/templateTagFunctionExample.png"
                alt="ES6 String Concat"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onTemplateTagFuncionClick}
                label="Run Code"
                style={{ marginTop: '25px' }}
              />
            </div>
          )}
          {!props.templateTagThree &&
            props.templateTagTwo && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="templateTagThree"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.templateTagThree && (
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
                src="/img/functionInTemplateTag.png"
                alt="ES6 String Concat"
                style={{ ...imageStyles, marginTop: '25px' }}
              />
              <FlatButton
                backgroundColor="#fff"
                onClick={onFunctionInTemplateTagClick}
                label="Run Code"
                style={{ marginTop: '25px' }}
              />
            </div>
          )}
          {!props.templateTagFour &&
            props.templateTagThree && (
              <Arrow
                onArrowClick={props.showNext}
                stateName="templateTagFour"
                style={{
                  color: 'white',
                  marginTop: '10px',
                  marginBottom: '15px'
                }}
              />
            )}
          {props.templateTagFour && (
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
                src="/img/styledComponent.png"
                alt="ES6 String Concat"
                style={{
                  ...imageStyles,
                  marginTop: '25px',
                  marginBottom: '25px'
                }}
              />
              <Link
                to="/thanks"
                style={{
                  color: '#F1F7EE',
                  textAlign: 'right',
                  textDecoration: 'none',
                  alignSelf: 'flex-end'
                }}
              >
                <h3 style={{ marginRight: '35px' }}>Thanks!</h3>
              </Link>
            </div>
          )}
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default TemplateLiterals;
