import React from 'react'
import { connect } from 'react-redux'

class TipandtrickView extends React.Component {
  render() {
    const text = this.props.texts
    
    return (
      <div className="tricks">
        <h1> Tips and Tricks </h1>
	
	<p>
	  { text.tipsandtricks1 }
	</p>
	
	
	
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(TipandtrickView)