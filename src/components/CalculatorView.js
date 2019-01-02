import React from 'react'
import { connect } from 'react-redux'
import Calculator  from '../utils/calculator'
import { createOutput } from '../reducers/calculatorReducer'

class CalculatorView extends React.Component {
  handleChange = (event) => {
    this.props.createOutput(event.target.value)
  }
  
  klick = (value) => () => {
    const already = this.props.calculator
    const newOne = already + value
    
    if (value === "") {
      this.props.createOutput(value)
    } else {
      this.props.createOutput(newOne)
    }
  }
  
  empty = () => () => {
    this.props.createOutput("")
  }
  
  doit = () => () => {
    const newOne = eval(this.props.calculator)
    this.props.createOutput(newOne)
  }
  
  select = (button) => () => {
    let already = this.props.calculator
    
    if (button !== 'pi') {
      already = eval(this.props.calculator)
    }
    
    switch(button) {
      case 'sin':
        already = Calculator.sin(already)
	break;
      case 'cos':
        already = Calculator.cos(already)
	break;
      case 'tan':
        already = Calculator.tan(already)
	break;
      case 'recip':
        already = Calculator.recip(already)
	break;
      case 'square':
        already = Calculator.square(already)
	break;
      case 'cube':
        already = Calculator.cube(already)
	break;
      case 'pi':
        const pi = Calculator.pi()
	already = pi.toString()
	break;
      case 'plus_or_minus':
        already = Calculator.plus_or_minus(already)
	break;
      case 'percent':
        already = Calculator.percent(already)
	break;
      case 'sqrt':
        already = Calculator.sqrt(already)
	break;
      case 'power':
        already = Calculator.power(already)
	break;
      case 'round':
        already = Calculator.round(already)
	break;
      case 'factorial':
        already = Calculator.factorial(already)
	break;
      default:
        console.log(button)
	break;
    }
    
    if (button !== 'pi') {
      this.props.createOutput(already)
    } else {
      const newOne = this.props.calculator + already
      this.props.createOutput(newOne)
    }
  }
  
  render() {
    return (
      <div>
        <table width="55" heigth="65" className="laskin">
	  <tbody>
	    <tr>
	      <td>
	        <input type="text" value={this.props.calculator} onChange={this.handleChange} name="input" size="50" maxLength="100" className="disp" />
	      </td>
	    </tr>
	    <tr>
	      <td>
	        <input type="button" value="1" className="btsblue" onClick={this.klick("1")} />  
		<input type="button" value="2" className="btsblue" onClick={this.klick("2")} />  
		<input type="button" value="3" className="btsblue" onClick={this.klick("3")} />  
		<input type="button" value="(" className="btswhite" onClick={this.klick("(")} />
		<input type="button" value="/" onClick={this.klick("/")} className="btswhite" />
		<input type="button" value="C" onClick={this.klick("")} className="btswhite" />	
	        <input type="button" value="Cos" className="btsred" onClick={this.select("cos")} />
		<input type="button" value="x^" className="btswhite" onClick={this.select("power")} />
	      </td>
	    </tr>
	    <tr>
	      <td>
		<input type="button" value="4" className="btsblue" onClick={this.klick("4")} />  
		<input type="button" value="5" className="btsblue" onClick={this.klick("5")} />  
		<input type="button" value="6" className="btsblue" onClick={this.klick("6")} />  
		<input type="button" value=")" className="btswhite" onClick={this.klick(")")} />
		<input type="button" value="+" onClick={this.klick("+")} className="btswhite" />
	        <input type="button" value="&#8730;" className="btsred" onClick={this.select("sqrt")} />
	        <input type="button" value="Sin" className="btsred" onClick={this.select("sin")} />
	        <input type="button" value="x&#178;" className="btswhite" onClick={this.select("square")} />
	      </td>
	    </tr>
	    <tr>
	      <td>
	        <input type="button" value="7" className="btsblue" onClick={this.klick("7")} />  
		<input type="button" value="8" className="btsblue" onClick={this.klick("8")} />  
		<input type="button" value="9" className="btsblue" onClick={this.klick("9")} />  
		<input type="button" value="%" className="btswhite" onClick={this.select("percent")} />
		<input type="button" value="-" onClick={this.klick("-")} className="btswhite" />
	        <input type="button" value="1/x" className="btsred" onClick={this.select("recip")} />
	        <input type="button" value="Tan" className="btsred" onClick={this.select("tan")} />
	        <input type="button" value="x&#179;" className="btswhite" onClick={this.select("cube")} />
	      </td>
	    </tr>
	    <tr>
	      <td>
	        <input type="button" value="0" className="btsblue" onClick={this.klick("0")} />  
	        <input type="button" value="." className="btsblue" onClick={this.klick(".")} />	
	        <input type="button" value=" +/- " className="btsblue" onClick={this.select("plus_or_minus")} />	
	        <input type="button" value="Pi" className="btsblue" onClick={this.select("pi")} />
		<input type="button" value="*" onClick={this.klick("*")} className="btswhite" />
	        <input type="button" value="=" onClick={this.doit()} className="btsred" />
	        <input type="button" value="&#8776;" className="btsred" onClick={this.select("round")} />
	        <input type="button" value="!" onClick={this.select("factorial")} className="btsred" />
	      </td>
	    </tr>
	  </tbody>
	</table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  }
}

export default connect( mapStateToProps, { createOutput } )(CalculatorView);