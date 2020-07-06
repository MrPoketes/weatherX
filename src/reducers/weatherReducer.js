const initialState = {
    weather:null,
};
const weatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case "FETCH_WEATHER":
            let weatherObj = {};
            let windObj = {};
            let country = "";
            let cityName="";
            weatherObj = Object.assign({},weatherObj,{
                status:action.payload.weather[0].main,
                temp:action.payload.main.temp,
                feelsLike:action.payload.main.feels_like,
                pressure:action.payload.main.pressure,
                humidity:action.payload.humidity,
                clouds:action.payload.clouds.all,
            });
            windObj = Object.assign({},windObj,{
                speed:action.payload.wind.speed,
                deg:action.payload.deg,
            });
            country = action.payload.sys.country;
            cityName = action.payload.name;
            let newObj = {};
            newObj = Object.assign({},newObj,{
                weather:weatherObj,
                wind:windObj,
                country:country,
                cityName:cityName
            })
            return{
                ...state,
                weather:newObj
            };
        default:
            return state
    }
}
export default weatherReducer;