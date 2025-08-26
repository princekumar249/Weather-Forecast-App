import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            feelsLike: 37.43,
            humidity: 81,
            temp: 30.43,
            tempMax: 30.43,
            tempMin: 30.43,
            weather: "broken clouds",
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App using React</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}