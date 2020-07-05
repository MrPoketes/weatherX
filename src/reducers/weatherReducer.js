const initialState = {
    weather:null
};
const weatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case "FETCH_WEATHER":
            return{
                ...state,
                weather:action.payload
            };
        default:
            return state
    }
}
export default weatherReducer;