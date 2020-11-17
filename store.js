import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const inState ={}

const middleWare= [thunk]

const store = createStore(rootReducer,inState,applyMiddleware(...middleWare))


export default store