import React from 'react'
import {connect} from 'react-redux'

class TipandtrickView extends React.Component {
  render() {
    const text = this.props.texts;
    
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
          <div className="part1">
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
          </div>
          <div className="part2">
            <p>
              { text.search3 }
            </p>
        
            <h2>
              Colors in accessibility, html and RGB color table
            </h2>
        
            <p>
              { text.accessibility1 }
            </p>
          
            <p>
              So yeah if your example content creator or web designer or something like that you might actually like this a lot. There is website called <a href="http://www.saavutettavuus.fi/kontrasti.php">saavutettavuus.fi</a> which contains a lot of simple stuff about accessibility and colours.
            </p>
          
            <p>
              { text.accessibility3 }
            </p>
          
            <p>
              { text.accessibility4 }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { texts: state.texts }
};

export default connect( mapStateToProps )(TipandtrickView)