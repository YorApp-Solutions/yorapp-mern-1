const initialState = [];

export function yorStoreOfTheDayData(data) {
    return { type: 'getYorStores', data };
}

export const yorStoreOfTheDayReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getYorStores':
            return data;
        default:
            return state;
    }
};
