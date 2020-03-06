const initialState = [];

export function offersData(data) {
    return { type: 'getOffers', data };
}

export const offersReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getOffers':
            return data;
        default:
            return state;
    }
};
