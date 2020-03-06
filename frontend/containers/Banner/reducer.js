const initialState = [];

export function bannerData(data) {
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
