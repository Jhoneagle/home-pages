﻿import React from 'react'
import { connect } from 'react-redux'

class MainView extends React.Component {
  render() {
    return (
      <div>
        main view
      </div>
    )
  }
}

export default connect( null )(MainView);