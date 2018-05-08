import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Landing from './Landing';
import LetVsVar from './LetVsVar';
import ArrowFunctions from './ArrowFunctions';
import RestSpreadOperartor from './RestSpreadOperator';
import TemplateLiterals from './TemplateLiterals';
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
      constTwo: false,
      redeclarationTwo: false,
      arrowSyntaxTwo: false,
      restOperaterTwo: false,
      restOperatorFour: false,
      restOperatorFive: false,
      restOperatorSix: false,
      restOperatorSeven: false,
      spreadOperatorTwo: false,
      spreadOperatorThree: false
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
                  />
                )}
              />
              <Route
                path="/templateLiterals"
                render={() => <TemplateLiterals />}
              />
            </div>
          </HashRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
