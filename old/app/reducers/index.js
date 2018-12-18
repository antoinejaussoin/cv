import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import settings from './settings';

const rootReducer = combineReducers({
    routing,
    settings
});

export default rootReducer;
