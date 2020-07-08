
export const fetchWeatherData = (latitude, longitude, apiKey) => async (dispatch) => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`);
    let data = await response.json();
    dispatch({
        type: "FETCH_WEATHER",
        payload: data
    })
}