import React from 'react'
import { connect } from 'react-redux'

class AboutmeView extends React.Component {
  render() {
    const text = this.props.texts
    
    return (
      <div>
        <h1> About me </h1>
	
	<div>
	  { text.intro }
	</div>
	
	<h2> Hwo am I? </h2>
	
	<div>
	  { text.whoami1 }
	</div>
	
	<div>
	  { text.whoami2 }
	</div>
	
	<h2> About my history </h2>
	
	<div>
	  { text.myhistory1 }
	</div>
	
	<div>
	  { text.myhistory2 }
	</div>
	
	<h2> What am I interested about? </h2>
	
	<div>
	  { text.intrestedabout1 }
	</div>
	
	<div>
	  { text.intrestedabout2 }
	</div>
	
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(AboutmeView)