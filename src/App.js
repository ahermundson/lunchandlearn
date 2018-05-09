import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Landing from './Landing';
import LetVsVar from './LetVsVar';
import ArrowFunctions from './ArrowFunctions';
import RestSpreadOperartor from './RestSpreadOperator';
import TemplateLiterals from './TemplateLiterals';
import Destructuring from './Destructuring';
import ECMAScript from './EcmaScript';
import Thanks from './Thanks';
import './App.css';

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: '#4C5B61',
    textColor: '#172815',
    selectedTextColor: 'white'
  },
  inkBar: {
    backgroundColor: '#C5C5C5'
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      hoistingTwo: false,
      hoistingThree: false,
      hoistingFour: false,
      hoistingFive: false,
      constTwo: false,
      redeclarationTwo: false,
      arrowSyntaxTwo: false,
      restOperaterTwo: false,
      restOperatorFour: false,
      restOperatorFive: false,
      restOperatorSix: false,
      restOperatorSeven: false,
      spreadOperatorTwo: false,
      spreadOperatorThree: false,
      spreadOperatorFour: false,
      destructSyntaxTwo: false,
      destructSyntaxThree: false,
      destructSyntaxFour: false,
      destructSyntaxFive: false,
      destructSyntaxSix: false,
      destructSyntaxSeven: false,
      destructParamTwo: false,
      destructParamThree: false,
      destructParamFour: false,
      destructParamFive: false,
      destructArrayTwo: false,
      templateLiteralTwo: false,
      templateLiteralThree: false,
      templateLiteralFour: false,
      templateTagTwo: false,
      templateTagThree: false,
      templateTagFour: false,
      ecmaTwo: false,
      ecmaThree: false,
      ecmaFour: false,
      ecmaFive: false,
      ecmaHistorySix: false,
      ecmaHistoryFive: false,
      ecmaHistoryFour: false,
      ecmaHistoryThree: false,
      ecmaHistoryTwo: false
    };
    this.showNext = this.showNext.bind(this);
  }

  showNext(stateName) {
    console.log(stateName);
    this.setState({
      [stateName]: true
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <header className="App-header">
            <h1>ES6 Lunch and Learn</h1>
          </header>
          <HashRouter>
            <div>
              <Route exact path="/" component={Landing} />
              <Route
                path="/letvsvar"
                render={() => (
                  <LetVsVar
                    showNext={this.showNext}
                    hoistingTwo={this.state.hoistingTwo}
                    hoistingThree={this.state.hoistingThree}
                    hoistingFour={this.state.hoistingFour}
                    hoistingFive={this.state.hoistingFive}
                    constTwo={this.state.constTwo}
                    redeclarationTwo={this.state.redeclarationTwo}
                  />
                )}
              />
              <Route
                path="/arrowFunctions"
                render={() => (
                  <ArrowFunctions
                    showNext={this.showNext}
                    arrowSyntaxTwo={this.state.arrowSyntaxTwo}
                  />
                )}
              />
              <Route
                path="/restSpreadOperator"
                render={() => (
                  <RestSpreadOperartor
                    showNext={this.showNext}
                    restOperatorTwo={this.state.restOperatorTwo}
                    restOperatorThree={this.state.restOperatorThree}
                    restOperatorFour={this.state.restOperatorFour}
                    restOperatorFive={this.state.restOperatorFive}
                    restOperatorSix={this.state.restOperatorSix}
                    restOperatorSeven={this.state.restOperatorSeven}
                    spreadOperatorTwo={this.state.spreadOperatorTwo}
                    spreadOperatorThree={this.state.spreadOperatorThree}
                    spreadOperatorFour={this.state.spreadOperatorFour}
                  />
                )}
              />
              <Route
                path="/templateLiterals"
                render={() => (
                  <TemplateLiterals
                    showNext={this.showNext}
                    templateLiteralTwo={this.state.templateLiteralTwo}
                    templateLiteralThree={this.state.templateLiteralThree}
                    templateLiteralFour={this.state.templateLiteralFour}
                    templateTagTwo={this.state.templateTagTwo}
                    templateTagThree={this.state.templateTagThree}
                    templateTagFour={this.state.templateTagFour}
                  />
                )}
              />
              <Route
                path="/destructuring"
                render={() => (
                  <Destructuring
                    showNext={this.showNext}
                    destructSyntaxTwo={this.state.destructSyntaxTwo}
                    destructSyntaxThree={this.state.destructSyntaxThree}
                    destructSyntaxFour={this.state.destructSyntaxFour}
                    destructSyntaxFive={this.state.destructSyntaxFive}
                    destructSyntaxSix={this.state.destructSyntaxSix}
                    destructSyntaxSeven={this.state.destructSyntaxSeven}
                    destructParamTwo={this.state.destructParamTwo}
                    destructParamThree={this.state.destructParamThree}
                    destructParamFour={this.state.destructParamFour}
                    destructParamFive={this.state.destructParamFive}
                    destructParamSix={this.state.destructParamSix}
                    destructArrayTwo={this.state.destructArrayTwo}
                  />
                )}
              />
              <Route
                path="/ecmascript"
                render={() => (
                  <ECMAScript
                    showNext={this.showNext}
                    ecmaTwo={this.state.ecmaTwo}
                    ecmaThree={this.state.ecmaThree}
                    ecmaFour={this.state.ecmaFour}
                    ecmaFive={this.state.ecmaFive}
                    ecmaHistoryTwo={this.state.ecmaHistoryTwo}
                    ecmaHistoryThree={this.state.ecmaHistoryThree}
                    ecmaHistoryFour={this.state.ecmaHistoryFour}
                    ecmaHistoryFive={this.state.ecmaHistoryFive}
                    ecmaHistorySix={this.state.ecmaHistorySix}
                  />
                )}
              />
              <Route path="/thanks" render={() => <Thanks />} />
            </div>
          </HashRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
