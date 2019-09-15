import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import TestPage from './pages/test/test.component';

import {PageContainer, Panel} from './App.styles';

import {connect} from 'react-redux';


class App extends React.Component {

  render() {
    return (

      <PageContainer>
        
          <Panel>

            <HashRouter basename='/'>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/test" component={TestPage} />
            </HashRouter>

          </Panel>

      </PageContainer>
    );
  }
}

export default connect(null, null)(App);
