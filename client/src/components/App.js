import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
// import { Provider } from 'react-redux';
// import store from './store';
import GlobalState from './context/GlobalState'

class App extends Component {
  render() {
    return (
      
      <GlobalState>
      <div>
        <BrowserRouter>
        
        <div>

      <Route exact path="/" component={Landing} />

        </div>
        
        </BrowserRouter>
      </div>
      </GlobalState>
    );
  }
}

export default App;
