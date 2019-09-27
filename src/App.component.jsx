import React from 'react';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import TestPage from './pages/test/test.component';

import { PageContainer, InnerWrapper, GlobalStyles } from './App.styles';

import { connect } from 'react-redux';

import {ThemeProvider} from 'styled-components';
import {createStructuredSelector} from 'reselect';
import { selectThemeSettings } from './redux/themes/themes.selectors';

import Header from './components/header/header.component';


class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={this.props.themeSettings}>
        <>
        <GlobalStyles />
        <Header />

        <PageContainer>
          <InnerWrapper>
            <HashRouter basename='/'>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/test" component={TestPage} />
            </HashRouter>
          </InnerWrapper>
        </PageContainer>
        </>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = createStructuredSelector({
	themeSettings:selectThemeSettings
});

export default withRouter(connect(mapStateToProps, null)(App));