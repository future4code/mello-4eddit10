export const initialState = {
    posts: [],
    search: {
        name: null
    }
};

export const searchReducer = (state, action) => {
    switch(action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: action.search
            };
        case "RESET_SEARCH":
            return {
                ...state,
                search: initialState.search
            };
        default:
            return state;
    }
};