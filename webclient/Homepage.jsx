import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Route, Router} from 'react-router';
import Cookie from 'react-cookie';
import {Grid} from 'semantic-ui-react';
import NavBar from './components/landingPage/navBar';
import Login from './components/users/login.jsx';
import Signup from './components/users/signup.jsx';
import SentMailPage from './components/users/SentMailPage';
import SelectCategory from './components/users/selectCategory';
import UserProfile from './components/users/userprofile';
// import AnswerPage from './components/cardAnswerPage/answerPage';
let Cards = require('./components/landingPage/home');
let Invite = require('./components/invite');
let Profile = require('./components/profile/NavBarpro');
let Questions = require('./components/answerButton/questions.jsx');
let Answerpage = require('./components/cardAnswerPage/answerPage.jsx');
let Search = require('./components/search/search.jsx');
// let {browserHistory, Route, Router, IndexRoute} = require('react-router');
class MainComp extends React.Component {
  render() {
    if(!Cookie.load('email')) {
          Answerpage = require('./components/error.jsx');
          Invite = require('./components/error.jsx');
          Questions = require('./components/error.jsx');
          Profile = require('./components/error.jsx');
        }
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
      <Grid>
            <Grid.Column width={1}/>
            <Grid.Column width={15}>
                {this.props.children}
            </Grid.Column>
      </Grid>
      </div>
    );
  }
}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Login}/>
    <Route component={MainComp}>
      <Route path='/home' component={Cards} />
     <Route path='/invite' component={Invite} />
     <Route path='/answer' component={Questions} />
     <Route path='/answerPage' component={Answerpage} />
     <Route path='/profile' component={Profile} />
     <Route path='/search' component={Search} />
    </Route>
    <Route path='/signup' component={Signup}/>
    <Route path='/mail' component={SentMailPage} />
    <Route path='/selectCategory' component={SelectCategory}/>
    <Route path='/userProfile' component={UserProfile}/>
  </Router>, document.getElementById('mountapp'));
MainComp.propTypes = {
    children: React.PropTypes.object.isRequired
  };
