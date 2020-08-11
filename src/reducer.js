export const initialState = {
    user: null,
    // token: 'BQBz46RwGfMDSszvuvseQpCRsKXLa4S7zjX__qI7-bfooZAqfr57F37sbKAHNYFnG9J2c9ovi_7A2KKBEe2sph8fporhhuQUhTqFlpgKF4sukU0F51N9mqqQkpGp6yOrZ5epoOY29bycrIhQvwMoC_1NAnzyxh_9x-3XXy_B7D71t3aZ',
    playlists:[],
    playing: false,
    item:null,
    discover_weekly: null,
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {...state,
            playlists: action.playlists}
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;