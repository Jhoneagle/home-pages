const Calculator = {
  dummy() { 
    const result = 1
    return result
  },
  recip(value) {
    const result = 1 / value
    return result
  },
  square(value) {
    const result = value * value
    return result
  },
  cube(value) {
    const result = value * value * value
    return result
  },
  pi() {
    const result = Math.PI
    return result
  },
  plus_or_minus(value) {
    const result = -1 * value
    return result
  },
  percent(value) {
    const result = value / 100
    return result
  },
  sqrt(value) {
    const result =  Math.sqrt(value)
    return result
  },
  power(value) {
    const np = prompt("raise to what?")
    const result = Math.pow(value, np)
    return result
  },
  cos(value) {
    const result = Math.cos(value)
    return result
  },
  sin(value) {
    const result = Math.sin(value)
    return result
  },
  tan(value) {
    const result = Math.tan(value)
    return result
  },
  round(value) {
    const result = Math.round(value)
    return result
  },
  factorial(value) {
    let start = Math.round(value)
    let result = start
    
    if (start === 0 || start === 1) {
      return 1 
    }
    
    while (start > 1) { 
      start--;
      result *= start
    }
    
    return result
  }
}

export { Calculator as default }
