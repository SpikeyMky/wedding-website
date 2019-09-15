import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// import Header from './components/header/header.component';
// import Footer from './components/footer/footer.component';

// import './App.scss';
import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

// import {setCurrentUser} from './redux/user/user.actions';



class App extends React.Component {


  render() {
    return (
      <div>
        {/* <Header/> */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          {/* <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage/>)}/> */}
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}

// const mapStateToProps = () => ({
// });
// const mapDispatchToProps = dispatch => ({
// })

export default connect(null, null)(App);
