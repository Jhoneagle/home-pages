import { createStore, combineReducers, applyMiddleware } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import textReducer from './reducers/textReducer'
import loginReducer from './reducers/loginReducer'
import calculatorReducer from './reducers/calculatorReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notification: notificationReducer,
  login: loginReducer,
  users: userReducer,
  texts: textReducer,
  calculator: calculatorReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store