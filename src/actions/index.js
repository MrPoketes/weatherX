export const fetchWeatherData = (location,apiKey)=> (dispatch)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>
        dispatch({
            type:"FETCH_WEATHER",
            payload:data
        })
    )
}