import { WeatherProps } from "../../context/globalVariables";
import { getWeatherInfoList, renderMainInfo } from "../../helpers/weatherInfoInCard";
import "./cardForecast.scss";

interface CardForeCastProps {
    weatherInfo: WeatherProps; 
}

export default function CardForecast({weatherInfo}: CardForeCastProps) {
    const isForeCast = true
    const mainInfoList = getWeatherInfoList(weatherInfo, isForeCast);
  
    return (
        <div className="card-forecast col-xl-3 col-md-5 col-sm-12">  
            <div className="bg-secondary text-light">
                <h5 className="fw-bold">
                    ({weatherInfo.date})
                </h5>  
                <img 
                    src={weatherInfo.conditionCurrentImage} 
                    alt="conditionCurrent"
                />   
                { renderMainInfo(mainInfoList) }
            </div>   
        </div>
    )
}