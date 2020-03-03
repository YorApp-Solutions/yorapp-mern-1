export function store(stores) {
    return { type: 'getStores', stores };
}

const initialState = [];

export const storeReducer = (state = initialState, action) => {
    const { type, stores } = action;
    switch (type) {
        case 'getStores':
            return stores;
        default:
            return state;
    }
};
