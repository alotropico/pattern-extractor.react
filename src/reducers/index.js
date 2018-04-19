import { combineReducers } from 'redux';

import extractorReducer from './extractor-reducer';

const rootReducers = combineReducers({
	extractor: extractorReducer
});

export default rootReducers;