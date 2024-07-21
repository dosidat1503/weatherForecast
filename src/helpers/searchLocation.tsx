

import { useState } from "react"

import request from "../utils/request"
import useGlobalContext from "../context/globalVariables";
 
export default function SearchLocationHelper() {
    const { forecastDayQuantity, setWeatherInfoList, setIsLoading } = useGlobalContext()!;
    const [messageLocationError, setMessageLocationError] = useState<string>("")

    const handleSearchLocation = (cityName: string) => {
        return new Promise((resolve, reject) => { 
            if(cityName === ""){
                setMessageLocationError("Enter location to get weather information")
                setIsLoading(false)
            } 
            else { 
                const requestData = { 
                    location: cityName, 
                    forecastDayQuantity: forecastDayQuantity 
                }
  
                request.get('/getWeather', { params: requestData })
                .then(response => {    
                    let weatherInfoList = response.data.forecast.forecastday.map((forecast: any) => {
                        return {
                            city: response.data.location.name,
                            date: forecast.date,
                            temperature: forecast.day.avgtemp_c,
                            wind: forecast.day.maxwind_mph,
                            humidity: forecast.day.avghumidity,
                            conditionCurrent: forecast.day.condition.text,
                            conditionCurrentImage: forecast.day.condition.icon
                        }
                    }) 
        
                    setWeatherInfoList(weatherInfoList)
                    localStorage.setItem("weatherInfoList", JSON.stringify(weatherInfoList)) 
                    setMessageLocationError("")
                    setIsLoading(false)
                    resolve("Success")
        
                })
                .catch((error) => {
        
                    console.log('Error:', error.response ? error.response.data : error.message);
                    setMessageLocationError("City not found")
                    setIsLoading(false)
                    reject("City not found")
                    
                })  
            }  
        })
    } 

    return { handleSearchLocation, messageLocationError, setMessageLocationError }
}