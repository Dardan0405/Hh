import{combineReducers} from 'redux'
import { languageReducer} from './Reducers/languageReducer';
const rootReducer = combineReducers({
    language: languageReducer,
});


export default rootReducer;