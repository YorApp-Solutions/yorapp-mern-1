const initialState = [];

export function storeData(data) {
    return { type: 'getStores', data };
}

export const storesReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getStores':
            return data;

        default:
            return state;
    }
};
