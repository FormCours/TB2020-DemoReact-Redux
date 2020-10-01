import {createStore, combineReducers} from 'redux';
import compteurReducer from './reducers/compteur-reducer';


const reducer = combineReducers({
    compteur: compteurReducer
})

export default createStore(reducer);