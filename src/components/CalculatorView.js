import React from 'react'
import { connect } from 'react-redux'
import Calculator  from '../utils/calculator'
import { createOutput } from '../reducers/calculatorReducer'
import { Table, Grid, Col, Row } from 'react-bootstrap'

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
      <Grid bsClass="math" className="math">
        <Row>
	  <Col xs={6} md={3} />
	  <Col xs={6} md={3}>
	    <input type="text" value={this.props.calculator} onChange={this.handleChange} name="input" />
	  </Col>
	  <Col xs={6} md={3} />
	</Row>
	<Row>
	  <Col xs={6} md={3} />
	  <Col xs={6} md={3}>
	    <Table bsClass="calculator" className="calculator">
	      <tbody>
	        <tr>
	          <td>
	            <input type="button" value="1" onClick={this.klick("1")} />
		  </td>
		  <td>
	  	    <input type="button" value="2" onClick={this.klick("2")} />
		  </td>
		  <td>
	  	    <input type="button" value="3" onClick={this.klick("3")} />
		  </td>
		  <td>
		    <input type="button" value="  (   " onClick={this.klick("(")} />
	  	  </td>
		  <td>
		    <input type="button" value="/" onClick={this.klick("/")} />
		  </td>
		  <td>
		    <input type="button" value="  C   " onClick={this.klick("")} />
		  </td>
		  <td>
	            <input type="button" value="Cos" onClick={this.select("cos")} />
		  </td>
		  <td>
		    <input type="button" value="x^" onClick={this.select("power")} />
	          </td>
	        </tr>
	        <tr>
	          <td>
		    <input type="button" value="4" onClick={this.klick("4")} />
		  </td>
		  <td>
		    <input type="button" value="5" onClick={this.klick("5")} />
		  </td>
		  <td>
		    <input type="button" value="6" onClick={this.klick("6")} />
		  </td>
		  <td>
		    <input type="button" value="  )   " onClick={this.klick(")")} />
		  </td>
		  <td>
		    <input type="button" value="* " onClick={this.klick("*")} />
		  </td>
		  <td>
	            <input type="button" value="  &#8730;    " onClick={this.select("sqrt")} />
		  </td>
		  <td>
	            <input type="button" value="Sin " onClick={this.select("sin")} />
		  </td>
		  <td>
	            <input type="button" value="x&#178; " onClick={this.select("square")} />
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <input type="button" value="7" onClick={this.klick("7")} />
		  </td>
		  <td>
		    <input type="button" value="8" onClick={this.klick("8")} />
		  </td>
		  <td>
		    <input type="button" value="9" onClick={this.klick("9")} />
		  </td>
		  <td>
		    <input type="button" value="% " onClick={this.select("percent")} />
		  </td>
		  <td>
		    <input type="button" value="- " onClick={this.klick("-")} />
		  </td>
		  <td>
	            <input type="button" value="1/x" onClick={this.select("recip")} />
		  </td>
		  <td>
	            <input type="button" value="Tan" onClick={this.select("tan")} />
		  </td>
		  <td>
	            <input type="button" value="x&#179; " onClick={this.select("cube")} />
	          </td>
	        </tr>
	        <tr>
		  <td>
	            <input type="button" value=". " onClick={this.klick(".")} />
		  </td>
	          <td>
	            <input type="button" value="0" onClick={this.klick("0")} />
		  </td>
		  <td>
	            <input type="button" value="=" onClick={this.doit()} />
		  </td>
		  <td>
	            <input type="button" value="Pi " onClick={this.select("pi")} />
		  </td>
		  <td>
		    <input type="button" value="+" onClick={this.klick("+")} />
		  </td>
		  <td>
	            <input type="button" value="+/-" onClick={this.select("plus_or_minus")} />
		  </td>
		  <td>
	            <input type="button" value="  &#8776;    " onClick={this.select("round")} />
		  </td>
		  <td>
	            <input type="button" value="  !   " onClick={this.select("factorial")} />
	          </td>
	        </tr>
	      </tbody>
	    </Table>
	  </Col>
	  <Col xs={6} md={3} />
	</Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  }
}

export default connect( mapStateToProps, { createOutput } )(CalculatorView);