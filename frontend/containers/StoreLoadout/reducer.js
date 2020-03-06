const initialState = [];

export function updateStoreDetails(data) {
    return { type: 'updateStoreDetails', data };
}

export const storeDetailsReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'updateStoreDetails':
            return Object.assign({}, state, data);

        default:
            return state;
    }
};
