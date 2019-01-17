import React from 'react'
import { connect } from 'react-redux'

class AboutmeView extends React.Component {
  render() {
    const text = this.props.texts
    
    if (text == null) {
      return (
        <div className="about">
	  <div className="alert"> 
	    <p>
	      pls wait a moment so that the website loads completely and then reload. It should not take more then few seconds. 
	    </p>
	  </div>
	</div>
      )
    }
    
    return (
      <div className="about">
        <div className="text">
	  <h1> About me </h1>
	
	  <p>
	    Hi! Welcome to my home pages. You can find here scientific calculator, some tips and tricks about diffirent stuff and ofcourse some info about me down below. The pages has been made with React so it might have bugs.
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
	  
	  <p>
	    { text.myhistory3 }
	  </p>
	
	  <p>
	    All public code I have made can be found from my <a href="https://github.com/Jhoneagle">Github</a> profile.
	  </p>
	
	  <h2> What am I interested about? </h2>
	
	  <p>
	    { text.intrestedabout1 }
	  </p>
	
	  <p>
	    { text.intrestedabout2 }
	  </p>
	
	</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(AboutmeView)