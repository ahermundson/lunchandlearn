import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Landing from './Landing';
import LetVsVar from './LetVsVar';
import ArrowFunctions from './ArrowFunctions';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1>ES6 Lunch and Learn</h1>
          </header>
          <HashRouter>
            <div>
              <Route exact path="/" component={Landing} />
              <Route path="/letvsvar" component={LetVsVar} />
              <Route path="/arrowFunctions" component={ArrowFunctions} />
            </div>
          </HashRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
