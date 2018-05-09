import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
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
      <Tab label="Usage">
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
            src="/img/templateLiteralFunction.png"
            alt="ES6 String Concat"
            style={imageStyles}
          />
          <img
            src="/img/templateLiteralMultiLine.png"
            alt="ES6 String Concat"
            style={{ ...imageStyles, marginTop: '25px' }}
          />
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
      </Tab>
      <Tab label="Template Tag">
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
            src="/img/templateTagExample.png"
            alt="ES6 String Concat"
            style={imageStyles}
          />
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
          <img
            src="/img/styleComponent.png"
            alt="ES6 String Concat"
            style={{ ...imageStyles, marginTop: '25px', marginBottom: '25px' }}
          />
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default TemplateLiterals;
