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
	  
	  <p>
	    Hi! Welcome to my home pages. You can find here scientific calculator, some tips and tricks about diffirent stuff and also info about me. The pages has been made with React so it might have bugs.
	  </p>
	</div>
      </div>
    )
  }
}

export default connect( null )(MainView);