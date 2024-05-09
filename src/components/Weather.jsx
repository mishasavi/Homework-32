import "../CSS/Weather.css";
const Weather = ({message, weatherInfo}) => {

    if (weatherInfo.city) {
    return (
        <div className="responseOk">
            <p><i>Location</i>: <b>{weatherInfo.city}</b>, {weatherInfo.country}</p>
            <p><i>Temperature</i>: <b>{weatherInfo.temperature.toFixed(1)} C</b></p>
            <p><i>Pressure</i>: <b>{(weatherInfo.pressure*0.75).toFixed(1)} mmHg</b></p>

        </div>
    );
    } else {
        return (
            <div className="responseError"><p>{message}</p></div>
        );}
};

export default Weather;