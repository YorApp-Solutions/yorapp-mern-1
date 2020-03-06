const initialState = [];

export function stores(data) {
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

export function banner(data) {
    return { type: 'getBanner', data };
}

export const bannerReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getBanner':
            return data;
        default:
            return state;
    }
};

export function yorStores(data) {
    return { type: 'getYorStores', data };
}

export const yorStoresReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case 'getYorStores':
            return data;
        default:
            return state;
    }
};
