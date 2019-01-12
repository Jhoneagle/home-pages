import React from 'react'
import { connect } from 'react-redux'

class TipandtrickView extends React.Component {
  render() {
    const text = this.props.texts
    
    if (text == null) {
      return {
        <div className="tricks">
	  <div className="alert"> 
	    <p>
	      pls wait a moment so that the website loads completely and then reload. It should not take more then few seconds. 
	    </p>
	  </div>
	</div>
      }
    }
    
    return (
      <div className="tricks">
        <h1> Tips and Tricks </h1>
	
	<h2>
	  
	</h2>
	
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