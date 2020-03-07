import { uniqWith, isEqual } from 'lodash';

const initialState = [];

export function offersData(data) {
    return { type: 'getOffers', data };
}

export function offerData(data) {
    return { type: 'getOffer', data };
}

export const offersReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getOffer':
            return uniqWith([...state, ...data], isEqual);
        case 'getOffers':
            return uniqWith([...state, ...data], isEqual);
        default:
            return state;
    }
};
