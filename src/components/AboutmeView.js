import React from 'react'
import { connect } from 'react-redux'

class AboutmeView extends React.Component {
  render() {
    const text = this.props.texts
    
    return (
      <div>
        <h1> About me </h1>
	
	<p>
	  { text.intro }
	</p>
	
	<h2> Hwo am I? </h2>
	
	<p>
	  { text.whoami1 }
	</p>
	
	<p>
	  { text.whoami2 }
	</p>
	
	<h2> About my history </h2>
	
	<p>
	  { text.myhistory1 }
	</p>
	
	<p>
	  { text.myhistory2 }
	</p>
	
	<h2> What am I interested about? </h2>
	
	<p>
	  { text.intrestedabout1 }
	</p>
	
	<p>
	  { text.intrestedabout2 }
	</p>
	
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(AboutmeView)