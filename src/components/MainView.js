import React from 'react'
import { connect } from 'react-redux'

class MainView extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="text">
          <h1>
            Johneagle´s home page
          </h1>
        </div>
      </div>
    )
  }
}

export default connect( null )(MainView);