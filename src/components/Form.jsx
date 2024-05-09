import '../CSS/Form.css';
const Form = ({getWeather}) => {

    const getCity = e =>{
        e.preventDefault();
        getWeather(e.currentTarget.city.value.trim());
        e.currentTarget.city.value = "";
    }

    return (
        <form onSubmit={getCity}>
            <input type="text" name="city" placeholder="Enter your City"/>
            <button className="fetchButton" type="submit">Get Weather</button>
        </form>
    );
};

export default Form;