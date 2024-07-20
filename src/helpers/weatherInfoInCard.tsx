
import { WeatherProps } from "../context/globalVariables";

interface WeatherInfoItemProps {
    feild: string;
    value: string; 
} 

export const getWeatherInfoList = (weatherInfo: WeatherProps, isForeCast: boolean = false) => [
    {
        feild: isForeCast ? "Temp" : "Temperature",
        value: `${weatherInfo.temperature}°C`
    },
    {
        feild: "Wind",
        value: `${weatherInfo.wind} M/S`
    },
    {
        feild: "Humidity",
        value: `${weatherInfo.humidity}%`
    },
]

export const renderMainInfo = (mainInfoList: WeatherInfoItemProps[]) => mainInfoList.map((info, index) => 
        ( 
            <p 
                key={index} 
                className="d-flex justify-content-flex-start mb-1"
            >
                {info.feild}: {info.value}
            </p>  
        )
    ) 
