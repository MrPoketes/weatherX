export const fetchWeatherData = (latitude,longitude,apiKey)=> (dispatch)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>
        dispatch({
            type:"FETCH_WEATHER",
            payload:data
        })
    )
}