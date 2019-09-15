import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import TestPage from './pages/test/test.component';

import {PageContainer, InnerWrapper} from './App.styles';

import {connect} from 'react-redux';

import Header from './components/header/header.component';


class App extends React.Component {

  render() {
    return (
      <>
      <Header/>

      <PageContainer>        
          <InnerWrapper>
            <HashRouter basename='/'>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/test" component={TestPage} />
            </HashRouter>
          </InnerWrapper>
      </PageContainer>

      </>
    );
  }
}

export default connect(null, null)(App);
