import React from 'react';
import { notify } from '../reducers/notificationReducer'
import { login } from '../reducers/loginReducer'
import { connect } from 'react-redux'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginFormVisible: false
    }
  }

  login = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    if (this.state.loginFormVisible) {
      return (
        <div className='loginForm'>
          <h2>Log in to application</h2>
	  
          <form onSubmit={this.login}>
            <FormGroup>
              <ControlLabel>Username:</ControlLabel>
              <FormControl
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleFieldChange}
              />
              <ControlLabel>Password:</ControlLabel>
              <FormControl
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleFieldChange}
              />
              <Button bsStyle="success" type="submit">login</Button>
            </FormGroup>
          </form>
          <Button bsStyle="danger" onClick={e => this.setState({ loginFormVisible: false })}>
            cancel
          </Button>
        </div>
      )
    }
    
    return (
      <div className='loginForm'>
        <Button bsStyle="info" onClick={e => this.setState({ loginFormVisible: true })}>
          login
        </Button>
      </div>
    )
  }
}

export default connect( null, { notify, login })(LoginForm);