import { WeatherProps } from "../../context/globalVariables";
import { getWeatherInfoList, renderMainInfo } from "../../helpers/weatherInfoInCard";
 
import "./cardToday.scss";

interface CardTodayProps {
    weatherInfo: WeatherProps; 
}

export default function CardToday({weatherInfo}: CardTodayProps) { 
    const mainInfoList = getWeatherInfoList(weatherInfo);

    return (
        <div style={{ padding: "0 1em" }}>
            <div className="card-today row bg-primary text-light">   
                <div className="card-today-main col-6">
                    <h3 className="fw-bold">
                        { weatherInfo.city } ({weatherInfo.date})
                    </h3> 
                    { renderMainInfo(mainInfoList) }    
                </div>
                <div className="card-today-sub col-6"> 
                    <div>
                        <img 
                            src={weatherInfo.conditionCurrentImage} 
                            alt="conditionCurrent"
                        /> 
                        <p className="mb-0">{weatherInfo.conditionCurrent}</p> 
                    </div>
                </div>   
            </div>
        </div>
    )
}