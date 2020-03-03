import { combineReducers } from 'redux';

import { storeReducer } from './containers/reducer';

const rootReducer = combineReducers({
    stores: storeReducer,
});

export default rootReducer;
