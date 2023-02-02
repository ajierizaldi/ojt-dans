const initState = {
    isResult: false,
    isFetching: false,
    isError: false,
}

export const identity = (state = initState, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                isResult: action.payload.data,
                isFetching: action.payload.loading,
                isError: action.payload.errorMsg,
            }
        default:
            return state;
    }
}