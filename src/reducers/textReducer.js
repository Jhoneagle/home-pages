import textService from '../services/text'
const initialState = null

const textReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'GET_TEXTS':
    return action.texts
  default:
    return state
  }
}

export const initializeTexts = () => {
  return async (dispatch) => {
    const texts = await textService.getAll()
    
    dispatch({
      type: 'GET_TEXTS',
      texts
    })
  }
}

export default textReducer