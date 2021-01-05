export const initialState = {
    user: null,
    expires: 0,
    token: null,
    playList: [],
    playing: false,
    item: null,
    albums: null,
}

const reducer = (state, action) => {
    console.log(action)
    if(action.type === 'SET_USER')
        return {
            ...state,
            user: action.payload.user
        }
    
    if(action.type === 'SET_TOKEN')
        return {
            ...state,
            token: action.payload.token,
            expires: action.payload.expires,
        }

    return state;
}

export default reducer;