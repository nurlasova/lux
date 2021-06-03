import { combineReducers } from 'redux'
import {Counter} from './counter'
import { Totalsumm } from './totalsum'
const rootReducer = combineReducers({
    Counter
})

export default rootReducer