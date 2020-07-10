
export const fetchWeatherData = (latitude, longitude, apiKey) => async (dispatch) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
    let data = await response.json();
    dispatch({
        type: "FETCH_WEATHER",
        payload: data
    })
}

export const fetchWeatherDataByName = (name,apiKey) => async (dispatch) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`);
    let data = await response.json();
    dispatch({
        type:"FETCH_WEATHER_BY_NAME",
        payload:data
    })
}