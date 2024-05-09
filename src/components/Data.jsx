import {Component} from "react";
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {API_KEY, BASE_URL} from "../utils/constants.js";

class Data extends Component {


    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: "",
            message: ""
        }
    }

    getWeather = (city) => {
        fetch (`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                if (response.ok) { return response.json()} else {throw new Error(response.statusText)}
            }
                )
            .then (data => {
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temperature: data.main.temp,
                        pressure: data.main.pressure,
                    },
                    message: null
                })
            })
            .catch (err => {
                    this.setState({
                    weatherInfo: {},
                    message: `Error fetching weather: ${err.message}`

                });

    })}

    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather message = {this.state.message} weatherInfo = {this.state.weatherInfo}/>
            </div>
        );
    }
}

export default Data;
