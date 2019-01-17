import React from 'react'
import { connect } from 'react-redux'

class TipandtrickView extends React.Component {
  render() {
    const text = this.props.texts
    
    if (text == null) {
      return (
        <div className="tricks">
	  <div className="alert"> 
	    <p>
	      pls wait a moment so that the website loads completely and then reload. It should not take more then few seconds. 
	    </p>
	  </div>
	</div>
      )
    }
    
    return (
      <div className="tricks">
        <div className="text">
	  <h1> Tips and Tricks </h1>
	
	  <h2>
	    How to translate better using google translator
	  </h2>
	
	  <p>
	    { text.translate }
	  </p>
	
	  <p>
	    { text.translate2 }
	  </p>
	
	  <p>
	    { text.translate3 }
	  </p>
	
	  <h2>
	    How to search more accurately with google
	  </h2>
	
	  <p>
	    { text.search }
	  </p>
	
	  <p>
	    { text.search2 }
	  </p>
	
	  <p>
	    { text.search3 }
	  </p>
	
	  <h2>
	    Colors in accessibility, html and RGB color table
	  </h2>
	
	  <p>
	    On this one unfortunately if you don´t speak finnish then this might not really help you at all. But if your smart you can always translate the content with google so it´s not impossible but it´s not the most easiest to use.
	  
	    So yeah if your example content creator or web designer or something like that you might actually like this a lot. There is website called <a href="http://www.saavutettavuus.fi/kontrasti.php">saavutettavuus.fi</a> which contains a lot of simple stuff about accessibility and colors. 
	  
	    For example do you need to know contrast diffirent between colors or how well you can see text from background or maybe you want to find a new color. These all can be found from th website. The website also contains lot of other stuff about accessibility too but the color part s one of the most important in the end.
	  
	    Also as an extra note, not to brag or anything, I actually designed most of the logic behind the websites color functionality according to specifics that was given to me. Like how to chance RGB to hexadecimal and vice versa, how to go through all the colors in RGB color table and how to compare colors between each others. But I never actually implemented it there on the php. 
	  </p>
	
	</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
}

export default connect( mapStateToProps )(TipandtrickView)