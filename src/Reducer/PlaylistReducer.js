const { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } = require("../Constants/Constants");




const PlaylistReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TO_PLAYLIST:
            return [
                ...state,
                action.playlist
            ]
        case REMOVE_FROM_PLAYLIST:
            return [
                ...state.filter(e => e.id !== action.playlist.id)
            ]

        default:
            return state;
    }
}


export default PlaylistReducer;