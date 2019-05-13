import React from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'

class Notification extends React.Component {
  render() {
    const getNotificationDiv = () => this.props.notification === null ?
      null : ( <Alert color="success">{this.props.notification}</Alert> );

    return getNotificationDiv()
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
};

export default connect(mapStateToProps)(Notification)