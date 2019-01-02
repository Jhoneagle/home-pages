import React from 'react'
import { connect } from 'react-redux'

class TipandtrickView extends React.Component {
  render() {
    const text = this.props.texts
    
    return (
      <div>
        <h1> Tips and Tricks </h1>
	
	<div>
	  { text.tipsandtricks1 }
	</div>
	
	
	
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(TipandtrickView)