const initialState = ""

const calculatorReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'CREATE_OUTPUT':
    return action.output
  default:
    return state
  }
}

export const createOutput = (output) => {
  return async (dispatch) => {
    dispatch({
      type: 'CREATE_OUTPUT',
      output
    })
  }
}

export default calculatorReducer