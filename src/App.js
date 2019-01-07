﻿import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { notify } from './reducers/notificationReducer'
import { initializeUsers } from './reducers/userReducer'
import { initializeTexts } from './reducers/textReducer'
import { login, logout, initializeCredentials } from './reducers/loginReducer'
import LoginForm from './components/LoginForm'
import Menu from './components/Menu'
import Notification from './components/Notification'
import MainView from './components/MainView'
import CalculatorView from './components/CalculatorView'
import TipandtrickView from './components/TipandtrickView'
import AboutmeView from './components/AboutmeView'
import { Container } from 'semantic-ui-react'
import { Well } from 'react-bootstrap'

const Footer = () => (
  <Well>
    
  </Well>
)

class App extends React.Component {
  componentDidMount() {
    this.props.initializeCredentials()
    this.props.initializeUsers()
    this.props.initializeTexts()
  }

  render() {
    return (
      <Container>
        <Router>
          <div>
            <Menu />
            
            <Notification />
	    
	    {this.props.user === null
              ? <Switch>
                  <Route path='/home-pages/login' render={() =>
                    <LoginForm />
                  } />
                </Switch>
              : <Switch>
                  <Redirect from='/home-pages/login' to='/' />
                </Switch>
            }
	  
	    <Route exact path='/home-pages/' render={() =>
              <MainView />
            } />
	    
	    <Route path='/home-pages/aboutme' render={() =>
              <AboutmeView />
            } />
	    
	    <Route path='/home-pages/tipandtrick' render={() =>
              <TipandtrickView />
            } />
	    
	    <Route path='/home-pages/calculator' render={() =>
              <CalculatorView />
            } />
          </div>
        </Router>
	
	<Footer />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    users: state.users,
    login: state.login,
    texts: state.texts,
    calculator: state.calculator
  }
}

const ConnectedApp = connect(
  mapStateToProps, { notify, initializeUsers, login, logout, initializeCredentials, initializeTexts }
)(App)

export default ConnectedApp