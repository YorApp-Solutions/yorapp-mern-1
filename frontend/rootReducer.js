import { combineReducers } from 'redux';

import { storesReducer } from './containers/App/reducer';
import { offersReducer } from './containers/Offers/reducer';
import { bannerReducer } from './containers/Banner/reducer';
import { yorStoreOfTheDayReducer } from './containers/YorStoreOfTheDay/reducer';

const rootReducer = combineReducers({
    current: combineReducers({
        city: 'Jamshedpur',
        yorStores: yorStoreOfTheDayReducer,
        banner: bannerReducer,
        offers: offersReducer,
        stores: storesReducer,
    }),
});

export default rootReducer;
