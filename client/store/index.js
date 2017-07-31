import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import user from './user'
import packages from './package'
import cart from './cart'
import review from './review'
const reducer = combineReducers({
  user,
  packages,
  cart,
  review
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware);

export default store
export * from './user'
export * from './package'
export * from './cart'
export * from './review'
