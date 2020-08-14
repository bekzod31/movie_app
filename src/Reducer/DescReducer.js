const { ADD_TO_DESCRIPTION_VIDEO } = require("../Constants/Constants");




const DescReducer = (state, action) => {
    switch(action.type){
        case ADD_TO_DESCRIPTION_VIDEO:
            return {
                ...state, 
                ...action.video
            }
        default:
            return state;
    }
}

export default DescReducer;