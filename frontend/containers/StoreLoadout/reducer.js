const initialState = {};

export function getStore(data) {
    return { type: 'getStore', data };
}

export function updateStoreDetails(data) {
    return { type: 'updateStoreDetails', data };
}

export const storeReducer = (state = initialState, action) => {
    const { type, data } = action;

    switch (type) {
        case 'getStore':
            return { ...state, [data.assign_id]: data };
        default:
            return state;
    }
};

export const storeDetailsReducer = (state = initialState, action) => {
    const { type, data } = action;

    switch (type) {
        case 'updateStoreDetails':
            return { ...state, [data.assign_id]: data };

        default:
            return state;
    }
};
